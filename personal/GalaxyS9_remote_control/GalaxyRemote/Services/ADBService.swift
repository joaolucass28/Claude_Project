import Foundation

@MainActor
class ADBService: ObservableObject {
    private let settings: AppSettings

    init(settings: AppSettings) {
        self.settings = settings
    }

    // MARK: - Device Detection

    func detectConnection() async -> ConnectionState {
        guard FileManager.default.fileExists(atPath: settings.adbPath) else {
            return .adbMissing
        }

        let result = await ProcessRunner.run(settings.adbPath, arguments: ["devices"])
        let lines = result.output
            .components(separatedBy: "\n")
            .dropFirst() // skip "List of devices attached"
            .filter { !$0.trimmingCharacters(in: .whitespaces).isEmpty }

        if lines.isEmpty { return .noDevice }

        // Prefer the user's preferred serial if set
        let preferred = settings.preferredSerial.trimmingCharacters(in: .whitespaces)

        for line in lines {
            let parts = line.components(separatedBy: "\t")
            guard parts.count >= 2 else { continue }
            let serial = parts[0].trimmingCharacters(in: .whitespaces)
            let state = parts[1].trimmingCharacters(in: .whitespaces)

            if state == "unauthorized" { return .unauthorized }

            if state == "device" {
                if preferred.isEmpty || preferred == serial {
                    return .connected(serial: serial)
                }
            }
        }

        // If preferred serial not found, return first connected
        for line in lines {
            let parts = line.components(separatedBy: "\t")
            guard parts.count >= 2 else { continue }
            let serial = parts[0].trimmingCharacters(in: .whitespaces)
            let state = parts[1].trimmingCharacters(in: .whitespaces)
            if state == "device" { return .connected(serial: serial) }
        }

        return .noDevice
    }

    // MARK: - Media Controls

    @discardableResult
    func sendKey(_ key: KeyEvent, serial: String) async -> ProcessResult {
        var args = ["-s", serial, "shell", "input", "keyevent", "\(key.rawValue)"]
        if serial.isEmpty {
            args = ["shell", "input", "keyevent", "\(key.rawValue)"]
        }
        return await ProcessRunner.run(settings.adbPath, arguments: args)
    }

    // MARK: - scrcpy

    func openScrcpy(serial: String) {
        guard FileManager.default.fileExists(atPath: settings.scrcpyPath) else { return }

        var args = settings.scrcpyArgs
            .components(separatedBy: " ")
            .filter { !$0.isEmpty }

        if !serial.isEmpty {
            args = ["-s", serial] + args
        }

        let process = Process()
        process.executableURL = URL(fileURLWithPath: settings.scrcpyPath)
        process.arguments = args
        try? process.run()
        // Fire and forget — scrcpy opens its own window
    }

    // MARK: - Raw command

    func runRaw(_ command: String, serial: String) async -> ProcessResult {
        var parts = command.components(separatedBy: " ").filter { !$0.isEmpty }
        var args: [String] = []
        if !serial.isEmpty {
            args = ["-s", serial]
        }
        args += parts
        return await ProcessRunner.run(settings.adbPath, arguments: args)
    }
}

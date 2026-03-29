import Foundation
import SwiftUI

@MainActor
class RemoteViewModel: ObservableObject {
    @Published var connectionState: ConnectionState = .noDevice
    @Published var isRefreshing = false
    @Published var log: [LogEntry] = []

    let settings = AppSettings()
    private lazy var adb = ADBService(settings: settings)

    private var activeSerial: String {
        if case .connected(let s) = connectionState { return s }
        return ""
    }

    // MARK: - Connection

    func refresh() async {
        isRefreshing = true
        connectionState = await adb.detectConnection()
        isRefreshing = false
    }

    // MARK: - Media Commands

    func playPause() async {
        await sendKey(.playPause, label: "Play/Pause")
    }

    func next() async {
        await sendKey(.next, label: "Next Track")
    }

    func previous() async {
        await sendKey(.previous, label: "Previous Track")
    }

    func volumeUp() async {
        await sendKey(.volumeUp, label: "Volume Up")
    }

    func volumeDown() async {
        await sendKey(.volumeDown, label: "Volume Down")
    }

    private func sendKey(_ key: KeyEvent, label: String) async {
        guard case .connected = connectionState else { return }
        let result = await adb.sendKey(key, serial: activeSerial)
        appendLog(command: "adb shell input keyevent \(key.rawValue) [\(label)]", result: result)
    }

    // MARK: - scrcpy

    func openPhone() {
        guard case .connected = connectionState else { return }
        adb.openScrcpy(serial: activeSerial)
        appendLog(command: "scrcpy \(settings.scrcpyArgs)", result: ProcessResult(output: "Launched", error: "", exitCode: 0))
    }

    // MARK: - Log helpers

    private func appendLog(command: String, result: ProcessResult) {
        let entry = LogEntry(
            timestamp: Date(),
            command: command,
            output: result.output.isEmpty ? result.error : result.output,
            isError: result.exitCode != 0
        )
        log.insert(entry, at: 0)
        if log.count > 200 { log.removeLast() }
    }

    func clearLog() {
        log.removeAll()
    }

    // MARK: - Diagnostics

    var diagnosticsText: String {
        Diagnostics.build(settings: settings, state: connectionState, log: log)
    }
}

import Foundation
import Combine

class AppSettings: ObservableObject {
    @Published var adbPath: String {
        didSet { UserDefaults.standard.set(adbPath, forKey: "adbPath") }
    }
    @Published var scrcpyPath: String {
        didSet { UserDefaults.standard.set(scrcpyPath, forKey: "scrcpyPath") }
    }
    @Published var preferredSerial: String {
        didSet { UserDefaults.standard.set(preferredSerial, forKey: "preferredSerial") }
    }
    @Published var scrcpyArgs: String {
        didSet { UserDefaults.standard.set(scrcpyArgs, forKey: "scrcpyArgs") }
    }

    init() {
        self.adbPath = UserDefaults.standard.string(forKey: "adbPath")
            ?? Self.detectADB()
        self.scrcpyPath = UserDefaults.standard.string(forKey: "scrcpyPath")
            ?? Self.detectScrcpy()
        self.preferredSerial = UserDefaults.standard.string(forKey: "preferredSerial") ?? ""
        self.scrcpyArgs = UserDefaults.standard.string(forKey: "scrcpyArgs")
            ?? "--window-title=Galaxy S9 --stay-awake"
    }

    static func detectADB() -> String {
        let candidates = [
            "/opt/homebrew/bin/adb",
            "/usr/local/bin/adb",
            "/usr/bin/adb"
        ]
        return candidates.first { FileManager.default.fileExists(atPath: $0) } ?? "/opt/homebrew/bin/adb"
    }

    static func detectScrcpy() -> String {
        let candidates = [
            "/opt/homebrew/bin/scrcpy",
            "/usr/local/bin/scrcpy"
        ]
        return candidates.first { FileManager.default.fileExists(atPath: $0) } ?? "/opt/homebrew/bin/scrcpy"
    }
}

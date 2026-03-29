import Foundation

enum Diagnostics {
    static func build(settings: AppSettings, state: ConnectionState, log: [LogEntry]) -> String {
        var lines: [String] = []
        lines.append("=== Galaxy Remote Diagnostics ===")
        lines.append("Generated: \(Date())")
        lines.append("")
        lines.append("--- Settings ---")
        lines.append("adbPath: \(settings.adbPath)")
        lines.append("scrcpyPath: \(settings.scrcpyPath)")
        lines.append("preferredSerial: \(settings.preferredSerial.isEmpty ? "(none)" : settings.preferredSerial)")
        lines.append("scrcpyArgs: \(settings.scrcpyArgs)")
        lines.append("")
        lines.append("--- Connection ---")
        lines.append("state: \(state.label)")
        let adbExists = FileManager.default.fileExists(atPath: settings.adbPath)
        let scrcpyExists = FileManager.default.fileExists(atPath: settings.scrcpyPath)
        lines.append("adb binary exists: \(adbExists)")
        lines.append("scrcpy binary exists: \(scrcpyExists)")
        lines.append("")
        lines.append("--- Last 20 Commands ---")

        let recent = Array(log.prefix(20))
        if recent.isEmpty {
            lines.append("(no commands run)")
        } else {
            let df = DateFormatter()
            df.dateFormat = "HH:mm:ss"
            for entry in recent {
                lines.append("[\(df.string(from: entry.timestamp))] \(entry.command)")
                if !entry.output.isEmpty {
                    lines.append("  → \(entry.output)")
                }
            }
        }

        return lines.joined(separator: "\n")
    }
}

import Foundation

enum ConnectionState: Equatable {
    case adbMissing
    case noDevice
    case unauthorized
    case connected(serial: String)

    var label: String {
        switch self {
        case .adbMissing:    return "ADB not found"
        case .noDevice:      return "No device"
        case .unauthorized:  return "Unauthorized"
        case .connected(let serial): return serial
        }
    }

    var color: StatusColor {
        switch self {
        case .adbMissing:   return .red
        case .noDevice:     return .orange
        case .unauthorized: return .yellow
        case .connected:    return .green
        }
    }
}

enum StatusColor {
    case red, orange, yellow, green
}

struct LogEntry: Identifiable {
    let id = UUID()
    let timestamp: Date
    let command: String
    let output: String
    let isError: Bool
}

enum KeyEvent: Int {
    case playPause   = 85
    case next        = 87
    case previous    = 88
    case volumeUp    = 24
    case volumeDown  = 25
    case mediaStop   = 86
}

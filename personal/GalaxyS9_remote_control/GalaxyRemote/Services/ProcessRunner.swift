import Foundation

struct ProcessResult {
    let output: String
    let error: String
    let exitCode: Int32
}

enum ProcessRunner {
    static func run(_ executable: String, arguments: [String]) async -> ProcessResult {
        await withCheckedContinuation { continuation in
            DispatchQueue.global(qos: .userInitiated).async {
                let process = Process()
                process.executableURL = URL(fileURLWithPath: executable)
                process.arguments = arguments

                let outPipe = Pipe()
                let errPipe = Pipe()
                process.standardOutput = outPipe
                process.standardError = errPipe

                do {
                    try process.run()
                    process.waitUntilExit()
                } catch {
                    continuation.resume(returning: ProcessResult(
                        output: "",
                        error: error.localizedDescription,
                        exitCode: -1
                    ))
                    return
                }

                let output = String(data: outPipe.fileHandleForReading.readDataToEndOfFile(), encoding: .utf8) ?? ""
                let errorOutput = String(data: errPipe.fileHandleForReading.readDataToEndOfFile(), encoding: .utf8) ?? ""

                continuation.resume(returning: ProcessResult(
                    output: output.trimmingCharacters(in: .whitespacesAndNewlines),
                    error: errorOutput.trimmingCharacters(in: .whitespacesAndNewlines),
                    exitCode: process.terminationStatus
                ))
            }
        }
    }
}

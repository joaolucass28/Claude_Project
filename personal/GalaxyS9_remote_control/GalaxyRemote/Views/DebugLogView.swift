import SwiftUI

struct DebugLogView: View {
    @EnvironmentObject var vm: RemoteViewModel
    @Environment(\.dismiss) private var dismiss

    private let dateFormatter: DateFormatter = {
        let f = DateFormatter()
        f.dateFormat = "HH:mm:ss"
        return f
    }()

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Header
            HStack {
                Text("Debug Log")
                    .font(.headline)
                Spacer()
                Button("Copy All") { copyDiagnostics() }
                    .controlSize(.small)
                Button("Clear") { vm.clearLog() }
                    .controlSize(.small)
                    .foregroundStyle(.red)
                Button("Done") { dismiss() }
                    .buttonStyle(.borderedProminent)
                    .controlSize(.small)
            }
            .padding()
            Divider()

            if vm.log.isEmpty {
                VStack {
                    Spacer()
                    Text("No commands run yet.")
                        .foregroundStyle(.tertiary)
                        .frame(maxWidth: .infinity)
                    Spacer()
                }
            } else {
                ScrollView {
                    LazyVStack(alignment: .leading, spacing: 0) {
                        ForEach(vm.log) { entry in
                            LogRow(entry: entry, formatter: dateFormatter)
                            Divider()
                        }
                    }
                    .padding(.horizontal, 12)
                }
            }
        }
        .frame(width: 520, height: 420)
        .font(.caption.monospaced())
    }

    private func copyDiagnostics() {
        NSPasteboard.general.clearContents()
        NSPasteboard.general.setString(vm.diagnosticsText, forType: .string)
    }
}

private struct LogRow: View {
    let entry: LogEntry
    let formatter: DateFormatter

    var body: some View {
        VStack(alignment: .leading, spacing: 2) {
            HStack(spacing: 6) {
                Text(formatter.string(from: entry.timestamp))
                    .foregroundStyle(.tertiary)
                Text(entry.command)
                    .foregroundStyle(entry.isError ? .red : .primary)
                    .lineLimit(1)
            }
            if !entry.output.isEmpty {
                Text(entry.output)
                    .foregroundStyle(.secondary)
                    .lineLimit(3)
            }
        }
        .padding(.vertical, 6)
    }
}

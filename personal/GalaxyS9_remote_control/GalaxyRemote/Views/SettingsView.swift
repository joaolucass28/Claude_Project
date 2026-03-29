import SwiftUI

struct SettingsView: View {
    @EnvironmentObject var vm: RemoteViewModel
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Header
            HStack {
                Text("Settings")
                    .font(.headline)
                Spacer()
                Button("Done") { dismiss() }
                    .buttonStyle(.borderedProminent)
                    .controlSize(.small)
            }
            .padding()
            Divider()

            Form {
                Section("Paths") {
                    LabeledContent("ADB") {
                        TextField("/opt/homebrew/bin/adb", text: $vm.settings.adbPath)
                            .textFieldStyle(.roundedBorder)
                            .font(.caption.monospaced())
                    }
                    LabeledContent("scrcpy") {
                        TextField("/opt/homebrew/bin/scrcpy", text: $vm.settings.scrcpyPath)
                            .textFieldStyle(.roundedBorder)
                            .font(.caption.monospaced())
                    }
                }

                Section("Device") {
                    LabeledContent("Preferred Serial") {
                        TextField("e.g. R38M204WXYZ (leave blank for first)", text: $vm.settings.preferredSerial)
                            .textFieldStyle(.roundedBorder)
                            .font(.caption.monospaced())
                    }
                }

                Section("scrcpy Arguments") {
                    TextEditor(text: $vm.settings.scrcpyArgs)
                        .font(.caption.monospaced())
                        .frame(height: 60)
                        .border(Color.secondary.opacity(0.3))
                }

                Section {
                    Button("Reset to Defaults") {
                        vm.settings.adbPath = AppSettings.detectADB()
                        vm.settings.scrcpyPath = AppSettings.detectScrcpy()
                        vm.settings.preferredSerial = ""
                        vm.settings.scrcpyArgs = "--window-title=Galaxy S9 --stay-awake"
                    }
                    .foregroundStyle(.red)
                }
            }
            .formStyle(.grouped)
        }
        .frame(width: 440, height: 380)
    }
}

import SwiftUI

struct ContentView: View {
    @EnvironmentObject var vm: RemoteViewModel
    @State private var showSettings = false
    @State private var showLog = false

    var body: some View {
        VStack(spacing: 0) {
            statusBar
            Divider()
            transportControls
            volumeRow
            Divider()
            bottomBar
        }
        .frame(width: 320)
        .background(.ultraThinMaterial)
        .sheet(isPresented: $showSettings) {
            SettingsView()
                .environmentObject(vm)
        }
        .sheet(isPresented: $showLog) {
            DebugLogView()
                .environmentObject(vm)
        }
        .task { await vm.refresh() }
    }

    // MARK: - Status Bar

    private var statusBar: some View {
        HStack(spacing: 8) {
            Circle()
                .fill(statusColor)
                .frame(width: 8, height: 8)
            Text(vm.connectionState.label)
                .font(.caption)
                .foregroundStyle(.secondary)
                .lineLimit(1)
            Spacer()
            if vm.isRefreshing {
                ProgressView().scaleEffect(0.6)
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 10)
    }

    private var statusColor: Color {
        switch vm.connectionState.color {
        case .green:  return .green
        case .yellow: return .yellow
        case .orange: return .orange
        case .red:    return .red
        }
    }

    // MARK: - Transport Controls

    private var transportControls: some View {
        HStack(spacing: 24) {
            mediaButton(systemImage: "backward.fill") {
                Task { await vm.previous() }
            }
            mediaButton(systemImage: "playpause.fill", large: true) {
                Task { await vm.playPause() }
            }
            mediaButton(systemImage: "forward.fill") {
                Task { await vm.next() }
            }
        }
        .padding(.vertical, 24)
        .disabled(!isConnected)
    }

    // MARK: - Volume Row

    private var volumeRow: some View {
        HStack(spacing: 16) {
            mediaButton(systemImage: "speaker.minus.fill") {
                Task { await vm.volumeDown() }
            }
            Text("Volume")
                .font(.caption2)
                .foregroundStyle(.tertiary)
            mediaButton(systemImage: "speaker.plus.fill") {
                Task { await vm.volumeUp() }
            }
        }
        .padding(.bottom, 20)
        .disabled(!isConnected)
    }

    // MARK: - Bottom Bar

    private var bottomBar: some View {
        HStack(spacing: 0) {
            bottomButton("phone", label: "Open Phone") {
                vm.openPhone()
            }
            .disabled(!isConnected)

            Divider().frame(height: 32)

            bottomButton("arrow.clockwise", label: "Refresh") {
                Task { await vm.refresh() }
            }

            Divider().frame(height: 32)

            bottomButton("gearshape", label: "Settings") {
                showSettings = true
            }

            Divider().frame(height: 32)

            bottomButton("list.bullet", label: "Log") {
                showLog = true
            }
        }
        .frame(height: 48)
    }

    // MARK: - Helpers

    private var isConnected: Bool {
        if case .connected = vm.connectionState { return true }
        return false
    }

    @ViewBuilder
    private func mediaButton(systemImage: String, large: Bool = false, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Image(systemName: systemImage)
                .font(large ? .title : .title3)
                .frame(width: large ? 56 : 40, height: large ? 56 : 40)
                .contentShape(Circle())
        }
        .buttonStyle(.plain)
        .foregroundStyle(.primary)
    }

    @ViewBuilder
    private func bottomButton(_ icon: String, label: String, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            VStack(spacing: 2) {
                Image(systemName: icon)
                    .font(.caption)
                Text(label)
                    .font(.system(size: 9))
            }
            .frame(maxWidth: .infinity)
            .frame(height: 48)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .foregroundStyle(.secondary)
    }
}

#Preview {
    ContentView()
        .environmentObject(RemoteViewModel())
}

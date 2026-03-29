import SwiftUI

@main
struct GalaxyRemoteApp: App {
    @StateObject private var viewModel = RemoteViewModel()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(viewModel)
        }
        .windowStyle(.hiddenTitleBar)
        .windowResizability(.contentSize)
        .defaultSize(width: 320, height: 400)
    }
}

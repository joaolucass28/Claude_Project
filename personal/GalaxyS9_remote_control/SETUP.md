# Galaxy Remote — Setup Guide

A compact macOS remote control for Samsung Galaxy S9 music playback via USB/ADB.

## Prerequisites

### 1. Install ADB and scrcpy (Homebrew)

```bash
brew install android-platform-tools scrcpy
```

Verify:
```bash
adb version
scrcpy --version
```

### 2. Enable USB Debugging on Galaxy S9

1. **Settings → About phone → Software information**
2. Tap **Build number** 7 times → "Developer mode enabled"
3. **Settings → Developer options**
4. Enable **USB Debugging**
5. Connect phone to Mac via USB cable
6. Tap **Allow** on the authorization dialog that appears on the phone

### 3. Verify ADB sees the device

```bash
adb devices
# Should show: <serial>    device
# "unauthorized" means you need to tap Allow on the phone again
```

---

## Build in Xcode

1. Open `GalaxyRemote.xcodeproj` (or create a new SwiftUI App project and add the source files)
2. **Signing & Capabilities** → set your Apple ID / team
3. In **Build Settings**, confirm:
   - Deployment Target: macOS 13.0+
   - Architecture: Apple Silicon (arm64) or Universal
4. **Edit Scheme → Run → Options**: uncheck "Mac Catalyst" if shown
5. Make sure `GalaxyRemote.entitlements` is linked under **Signing & Capabilities → App Sandbox** (should be OFF)
6. Press ⌘R to build and run

---

## Creating the Xcode Project from Scratch

If you don't have an `.xcodeproj`:

1. **File → New → Project → macOS → App**
2. Name: `GalaxyRemote`, Interface: SwiftUI, Language: Swift
3. Add all files from `GalaxyRemote/` into the project
4. In **Signing & Capabilities**, remove the App Sandbox capability (or add the entitlements file)
5. Build and run

---

## Settings

On first launch, the app auto-detects ADB and scrcpy at Homebrew paths. If they live elsewhere:

- **Settings → Paths** — update `adbPath` and `scrcpyPath`
- **Preferred Serial** — paste the device serial from `adb devices` if you have multiple devices
- **scrcpy Args** — customize resolution, bitrate, etc. (e.g. `--max-size 1920 --bit-rate 8M`)

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| "ADB not found" | Check Settings → adbPath. Run `which adb` in Terminal. |
| "Unauthorized" | Accept the dialog on the phone. Disable/re-enable USB Debugging. |
| "No device" | Try a different USB cable (data, not charge-only). Try `adb kill-server && adb start-server`. |
| Controls do nothing | Make sure music is actually playing on the phone first. Some players need focus. |
| scrcpy won't open | Verify path in Settings. Try `scrcpy` directly in Terminal. |

---

## ADB Key Events Reference

| Action | Key Code |
|--------|----------|
| Play/Pause | 85 |
| Next track | 87 |
| Previous track | 88 |
| Volume Up | 24 |
| Volume Down | 25 |
| Stop | 86 |

---

## Future Improvements

- Track metadata via `adb shell dumpsys media_session` (artist, song, album art)
- Menu bar icon mode (no dock icon)
- Keyboard shortcut support (media keys passthrough)
- Auto-reconnect polling every N seconds
- Haptic-style button feedback via NSHapticFeedbackManager
- Universal binary (Intel fallback): add `/usr/local/bin/adb` detection (already in AppSettings)

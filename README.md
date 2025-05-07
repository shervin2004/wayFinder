# 🧭 WayFinder — Indoor Navigation App

**WayFinder** is a sleek and powerful React Native app built with Expo, designed to help users navigate complex indoor environments such as malls, hotels, airports, universities, and event centers. Whether you're trying to find a store, a hotel room, or your next meeting location, WayFinder makes it simple.

## ✨ Features

- 🗺️ **Interactive Indoor Maps** — View detailed venue maps with intuitive zoom and pan
- 🔍 **Smart Search** — Quickly find stores, rooms, or points of interest
- 📌 **Path Visualization** — See the best route from your location to your destination
- 🏢 **Venue Support** — Built for use in malls, hotels, airports, campuses, and more
- ⚡ **Hybrid Codebase** — Written in both JavaScript and TypeScript for flexibility and maintainability

## 💠 Tech Stack

- **React Native** — Cross-platform mobile development
- **Expo** — Simplifies development, builds, and testing
- **TypeScript & JavaScript** — Static typing with flexibility
- **React Navigation** — Smooth and structured screen transitions
- **Custom SVG/Map Integration** — For tailored indoor mapping experiences

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/shervin2004/wayFinder.git
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Open the app on an Android device using the Expo Go app or an emulator.

## 🗂️ Project Structure

```
wayfinder-app/
├── assets/             # App images and map files
│   ├── html/           # Maps
├── src/                # Source code folder
│   ├── components/     # UI components like MapView, SearchInput
│   ├── screens/        # App screens (Home, Map, Details)
│   ├── index.js        # Entry point for Metro bundler
│   ├── App.js          # App entry point
├── app.json            # Expo configuration
├── package.json        # NPM metadata and scripts
└── tsconfig.json       # TypeScript config (if used)
```

## 📱 Supported Platform

- ✅ Android (fully optimized)
- ⚠️ iOS support planned

## 🚧 Future Improvements

- 🔊 Voice-guided directions
- 📡 Real-time indoor positioning (via WiFi/BLE beacons)
- 🛠 Admin panel for venue map updates
- 🔄 Multi-floor support

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## 📄 License

MIT License — see the [LICENSE](LICENSE) file for details.

---

> Made with ❤️ using React Native & Expo

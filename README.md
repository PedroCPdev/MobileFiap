# 📱 Mobile Application Development — FIAP

Coursework, exercises, and projects from the **Mobile Application Development** discipline of the *Análise e Desenvolvimento de Sistemas* program at FIAP.

This repository is a study log: each folder is a self-contained class, exercise, or checkpoint, kept in the state it was delivered so the progression is visible over the semester.

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native (Expo) |
| Language | TypeScript |
| Navigation | React Navigation / Expo Router |
| HTTP | Axios |
| Storage | AsyncStorage |
| Styling | StyleSheet API |

> Some earlier exercises may use plain JavaScript or the React Native CLI instead of Expo.

---

## 📂 Repository Structure

```
.
├── aulas/                  # Class-by-class exercises
│   ├── 01-setup-ambiente/
│   ├── 02-componentes-props/
│   ├── 03-estado-hooks/
│   ├── 04-navegacao/
│   ├── 05-consumo-api/
│   └── ...
├── checkpoints/            # Graded checkpoint deliverables
│   ├── cp1/
│   ├── cp2/
│   └── ...
├── projeto-final/          # Global Solution / final project
└── README.md
```

Each subfolder has its own `README.md` with the assignment brief and a short note on what was built.

---

## 🚀 Running a Project

Every folder is an independent project. Navigate into the one you want and install its dependencies:

```bash
cd aulas/05-consumo-api
npm install
npx expo start
```

Then scan the QR code with **Expo Go** (Android/iOS), or press `a` / `i` in the terminal to launch an emulator.

**Requirements**
- Node.js 20+
- npm or yarn
- Expo Go app, or Android Studio / Xcode for emulators

---

## 📚 Topics Covered

- [ ] Environment setup and React Native fundamentals
- [ ] Core components, props, and composition
- [ ] State management with hooks (`useState`, `useEffect`, `useContext`)
- [ ] Flexbox layout and responsive styling
- [ ] Lists and performance (`FlatList`, `SectionList`)
- [ ] Stack, tab, and drawer navigation
- [ ] Forms and input validation
- [ ] REST API consumption with Axios
- [ ] Local persistence with AsyncStorage
- [ ] Native device APIs (camera, geolocation, notifications)
- [ ] Build and distribution

---

## 🎓 Course Info

| | |
|---|---|
| **Institution** | FIAP |
| **Program** | Tecnólogo em Análise e Desenvolvimento de Sistemas |
| **Discipline** | Mobile Application Development |
| **Period** | 2025–2027 |

---

## ⚠️ Note

This is academic coursework — code here prioritizes learning the concept at hand over production readiness. Expect hardcoded values, simplified error handling, and the occasional experiment left in on purpose.

---

## 👤 Author

**Pedro** — [@PedroCPDev](https://github.com/PedroCPDev)
Junior .NET/C# Developer · [pedrocpdev.vercel.app](https://pedrocpdev.vercel.app)

---

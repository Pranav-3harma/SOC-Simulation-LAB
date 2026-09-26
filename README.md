# 🛡️ Enterprise SOC Simulation Lab & SIEM Dashboard

<div align="center">

![SOC Dashboard](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A fully interactive, browser-based Security Operations Center (SOC) simulation platform with a real-time SIEM dashboard. Designed for cybersecurity professionals, students, and educators to practice threat detection, incident response, and log analysis — no backend required.**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Key Dependencies](#-key-dependencies)
- [Usage Guide](#-usage-guide)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔍 Overview

The **Enterprise SOC Simulation Lab & SIEM Dashboard** is a sophisticated, dark-themed cybersecurity simulation tool that replicates the look, feel, and workflow of a real-world Security Operations Center. It includes a SIEM (Security Information and Event Management) dashboard, a threat simulation engine, log analysis tools, incident management workflows, and a threat intelligence feed — all running entirely in the browser.

This project is ideal for:
- 🎓 **Students** learning cybersecurity and SOC operations
- 🏢 **Organizations** running internal cybersecurity training
- 🔬 **Researchers** demonstrating threat detection workflows
- 🧑‍💻 **Developers** building security tooling prototypes

---

## ✨ Features

### 🖥️ SIEM Dashboard
- Real-time event feed with severity classification (Critical, High, Medium, Low, Info)
- Security metrics overview with live-updating KPI cards
- Interactive charts built with **Recharts** and **D3.js** for event trends and threat distribution
- Geolocation threat map powered by **Leaflet.js** showing attack origins worldwide
- Animated scanning effects and glassmorphism UI panels

### 🚨 Alert Management
- Prioritized alert queue with rule-based categorization
- Alert detail drill-down with full event context
- Acknowledge, escalate, and close workflow actions
- Filter and search across alert categories and severity levels

### 📋 Incident Response
- Incident creation and lifecycle management (Open → In Progress → Resolved)
- Timeline view with chronological event correlation
- Assignee tracking and severity tagging
- Automated playbook suggestions per incident type

### 🧪 Threat Simulation Lab
- Built-in attack scenario simulator (SQL injection, brute force, DDoS, ransomware, etc.)
- Configurable simulation parameters (intensity, duration, target systems)
- Real-time log generation as simulations run
- Attack kill-chain visualization

### 📝 Log Analysis & Query Editor
- Embedded **Monaco Editor** (VS Code engine) for writing log queries
- Syntax highlighting for custom query languages
- Log parsing, filtering, and timeline correlation
- Export logs to PDF using **jsPDF** and **html2canvas**

### 🌐 Threat Intelligence Feed
- Live-updating simulated threat intel feeds (IOCs, CVEs, actor profiles)
- MITRE ATT&CK framework tagging
- IOC (Indicator of Compromise) search and lookup
- Reputation scoring for IPs and domains

### 📊 Analytics & Reporting
- Trend analysis across time ranges
- Top attacker IPs and targeted systems
- Detection rate and mean-time-to-respond (MTTR) metrics
- One-click PDF report generation

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 6 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 3 |
| State Management | Zustand |
| Charts | Recharts, D3.js |
| Map | Leaflet.js |
| Code Editor | Monaco Editor (React) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Date Utilities | date-fns |
| PDF Export | jsPDF + html2canvas |
| Notifications | react-hot-toast |
| Routing | React Router DOM v7 |
| Linting | OXLint |

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `>= 18.x` — [Download here](https://nodejs.org/)
- **npm** `>= 9.x` (comes with Node.js)
- A modern browser (Chrome, Firefox, Edge — latest versions recommended)

Verify your installations:

```bash
node --version
npm --version
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/soc-simulation-lab.git
cd soc-simulation-lab
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages listed in `package.json`.

### 3. Start the Development Server

```bash
npm run dev
```

The app will be available at **[http://localhost:5173](http://localhost:5173)** and will hot-reload on file changes.

> **Note:** The `vite.config.ts` is configured to serve from the `dist/` directory (pre-built output). If you want to develop from source, make sure the `src/` folder exists and adjust `vite.config.ts` accordingly.

---

## 📁 Project Structure

```
soc-simulation-lab/
├── dist/                   # Pre-built production output (served by Vite dev server)
│   ├── assets/             # Compiled JS, CSS, and SVG assets
│   │   ├── index-*.js      # Main application bundle
│   │   ├── index-*.css     # Compiled styles
│   │   └── favicon-*.svg   # App favicon
│   └── index.html          # Entry HTML (loads Leaflet CDN + bundled assets)
├── src/                    # Source files (TypeScript/React components)
│   ├── components/         # Reusable UI components
│   ├── pages/              # Route-level page components
│   ├── store/              # Zustand global state stores
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Helper functions and simulators
│   ├── types/              # TypeScript type definitions
│   ├── main.tsx            # Application entry point
│   └── favicon.svg         # Source favicon
├── index.html              # Root HTML template (for source-based dev)
├── vite.config.ts          # Vite build & dev server configuration
├── tailwind.config.js      # Tailwind CSS theme and custom tokens
├── tsconfig.json           # TypeScript root config
├── tsconfig.app.json       # App-specific TypeScript config
├── tsconfig.node.json      # Node/Vite TypeScript config
├── postcss.config.js       # PostCSS configuration
├── .oxlintrc.json          # OXLint rules configuration
├── .gitignore              # Git ignore rules
└── package.json            # Project metadata and scripts
```

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev Server** | `npm run dev` | Start Vite dev server at `localhost:5173` with HMR |
| **Build** | `npm run build` | Type-check with `tsc` then bundle for production |
| **Preview** | `npm run preview` | Preview the production build locally |
| **Lint** | `npm run lint` | Run OXLint to check for code issues |

---

## 📦 Key Dependencies

### Runtime

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.2.7 | Core UI framework |
| `react-dom` | ^19.2.7 | DOM rendering |
| `react-router-dom` | ^7.18.1 | Client-side routing |
| `zustand` | ^5.0.14 | Lightweight global state management |
| `recharts` | ^3.9.2 | Declarative charting library |
| `d3` | ^7.9.0 | Advanced data visualization |
| `@monaco-editor/react` | ^4.7.0 | VS Code Monaco editor in React |
| `framer-motion` | ^12.42.2 | Production-ready animations |
| `lucide-react` | ^1.24.0 | Clean, consistent icon set |
| `date-fns` | ^4.4.0 | Modern date utility library |
| `jspdf` | ^4.2.1 | Client-side PDF generation |
| `html2canvas` | ^1.4.1 | Screenshot/canvas from DOM |
| `react-hot-toast` | ^2.6.0 | Lightweight toast notifications |

### Dev

| Package | Version | Purpose |
|---|---|---|
| `vite` | ^8.1.1 | Lightning-fast build tool |
| `typescript` | ~6.0.2 | Static typing |
| `@vitejs/plugin-react` | ^6.0.3 | React HMR support in Vite |
| `tailwindcss` | ^3.4.19 | Utility-first CSS framework |
| `oxlint` | ^1.71.0 | Fast Rust-based linter |

---

## 📖 Usage Guide

### Navigating the Dashboard

Once the app loads at `http://localhost:5173`, you will see the main SOC dashboard. Use the **sidebar navigation** to switch between modules:

| Module | Description |
|---|---|
| **Dashboard** | Overview of all security events, KPIs, and threat map |
| **Alerts** | View, filter, and manage active security alerts |
| **Incidents** | Full incident lifecycle management |
| **Threat Intel** | IOC feeds, CVEs, and MITRE ATT&CK mappings |
| **Log Analysis** | Monaco-powered query editor for log investigation |
| **Simulation Lab** | Run attack scenarios and observe event generation |
| **Reports** | Analytics views and PDF export |

### Running a Simulation

1. Navigate to **Simulation Lab** in the sidebar
2. Select an attack scenario (e.g., Brute Force, SQL Injection, DDoS)
3. Configure parameters (target, intensity, duration)
4. Click **Run Simulation** — events will begin flowing into the dashboard
5. Switch to **Dashboard** or **Alerts** to observe the generated events in real time

### Querying Logs

1. Navigate to **Log Analysis**
2. Use the embedded Monaco Editor to write your query
3. Set a time range using the date picker
4. Click **Execute** to filter and display matching log entries
5. Use **Export PDF** to generate a downloadable report of results

### Managing Incidents

1. Navigate to **Incidents**
2. Click **New Incident** and fill in the details (name, severity, category)
3. Assign it to an analyst and update the status as work progresses
4. View the full event timeline within the incident detail panel

---

## ⚙️ Configuration

### Vite (`vite.config.ts`)

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'dist',       // Serves from the pre-built dist/ folder
  server: {
    port: 5173,       // Dev server port
    host: true        // Expose to local network (useful for LAN testing)
  }
})
```

> To serve from `src/` instead, change `root: 'dist'` to `root: '.'` and ensure `src/main.tsx` exists.

### Tailwind Custom Theme (`tailwind.config.js`)

The project defines a custom `soc` color palette:

| Token | Hex | Usage |
|---|---|---|
| `soc-bg` | `#0a0e1a` | Main background |
| `soc-panel` | `#0d1117` | Panel backgrounds |
| `soc-card` | `#161b27` | Card surfaces |
| `soc-border` | `#1e2d40` | Border colors |
| `soc-accent` | `#00d4ff` | Primary accent / highlights |
| `soc-success` | `#00ff88` | Success / resolved states |
| `soc-warning` | `#ffaa00` | Warning / medium severity |
| `soc-danger` | `#ff3366` | Danger / critical alerts |
| `soc-purple` | `#7c3aed` | Secondary accent |

Custom fonts used: **Inter** (sans) and **JetBrains Mono** (mono for log output).

### Linting (`.oxlintrc.json`)

The project uses [OXLint](https://oxc.rs/docs/guide/usage/linter) — a fast, Rust-based linter. Run with:

```bash
npm run lint
```

---

## 🌍 Deployment

### Build for Production

```bash
npm run build
```

This runs TypeScript type-checking and produces optimized assets in `dist/`.

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Set `base` in `vite.config.ts` to your repo name:

```ts
base: '/your-repo-name/'
```

2. Install `gh-pages`:

```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:

```json
"deploy": "npm run build && gh-pages -d dist"
```

4. Run:

```bash
npm run deploy
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create a branch** for your feature: `git checkout -b feature/your-feature-name`
3. **Commit your changes**: `git commit -m "feat: add your feature"`
4. **Push** to your fork: `git push origin feature/your-feature-name`
5. Open a **Pull Request** against `main`

### Code Standards

- Follow TypeScript strict typing — avoid `any` unless absolutely necessary
- Keep components small and focused (single responsibility)
- Use Zustand stores for cross-component state
- Run `npm run lint` before submitting a PR

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ for the cybersecurity community.

⭐ If you find this useful, please star the repo!

</div>

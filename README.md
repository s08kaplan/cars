# AutoDen — Premium Automotive Marketplace & Management Dashboard

AutoDen is a modern, full-featured web application for browsing, searching, and managing luxury and pre-owned automobile inventories. Built with React, TypeScript, Vite, and TanStack Query, the platform provides real-time search, multi-language internationalization, full authentication, and administrative inventory management.

---

## Key Features

* **Vehicle Marketplace & Inventory Search**: Real-time car inventory search with debounced inputs (`useDebounce`) and URL query param integration.
* **Role-Based Navigation & Access**: Dynamic public and private route navigation based on user permissions (`role === 1`).
* **Multi-Language Support**: Instant language switching with localized text and dynamic text direction support (LTR/RTL) for English, Turkish, Arabic, French, Spanish, and German.
* **Car & Media Management**: Complete forms for uploading vehicle details, specs, legal status, and image galleries.
* **Message & Lead Center**: Customer contact forms, unread message badges, and lead tracking dashboard.
* **Optimized Data Layer**: Zero-boilerplate data fetching with TanStack Query (React Query) featuring query invalidation, caching strategies, and persistent store sync.

---

## Tech Stack

* **Frontend Framework**: React 18+ (with Vite)
* **Language**: TypeScript
* **Routing**: React Router v7 (`react-router`)
* **State Management**: Zustand (with local persistence)
* **Data Fetching & Caching**: `@tanstack/react-query`
* **Styling**: Tailwind CSS

---

## Project Structure

```text
src/
├── api/                  # API client modules & request helpers
├── components/           # Reusable UI components (Search, AuthProvider, etc.)
├── helpers/              # Utility functions and search fetchers
├── hooks/                # Custom hooks (React Query, debouncing, navigation)
│   ├── auth-hooks/       # Current user session and auth state hooks
│   ├── car-hooks/        # Vehicle queries, mutations, image uploads
│   └── message-hooks/    # Messages and contact lead management
├── languages/            # Translation JSON files (en, tr, ar, fr, esp, de)
├── store/                # Zustand stores (useAuthStore, useLanguageStore)
└── types/                # TypeScript interfaces and domain models
##Supported Languages
 English (en.json)
 Turkish (tr.json)
 Arabic (ar.json) — Supports Right-to-Left (RTL) layout
 French (fr.json)
 Spanish (esp.json)
 German (de.json)

##Getting Started
1. Prerequisites
Ensure you have the following installed on your machine:

Node.js (v18.0.0 or higher)

npm or pnpm / yarn

2. Installation
Clone the repository and install the dependencies:

Bash
git clone [(https://github.com/s08kaplan/cars.git)]
cd client
npm install
3. Environment Setup
Create a .env file in the root directory and add your backend API endpoint:

Kod snippet'i
VITE_API_BASE_URL=/api/(development)
VITE_BACKEND_URL=your-backend-url(production)
4. Running the Application
Development Mode:

Bash
npm run dev
Build for Production:

Bash
npm run build
Preview Production Build:

Bash
npm run preview
Available Scripts
npm run dev: Starts the React Router development server.

npm run build: Builds the application using React Router build tools.

npm run start: Serves the production server bundle (./build/server/index.js).

npm run typecheck: Runs React Router type generation (react-router typegen) followed by the TypeScript compiler check (tsc).

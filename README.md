# VoiceyBill — Web Client

React web dashboard for tracking income and expenses with voice input, AI receipt scanning, analytics charts, and scheduled email reports.

## Tech stack

- **React 19** + **Vite**
- **Tailwind CSS v4** + **Radix UI** for styling and components
- **Redux Toolkit** + RTK Query for state and API calls
- **React Router v7** for navigation
- **Recharts** for analytics charts
- **TanStack Table** for transaction data tables

## Prerequisites

- Node.js 20 or later
- A running instance of the [backend](../backend/README.md)

## Setup

```bash
cp .env.example .env
npm ci
```

### Environment variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Base URL of the backend API (e.g. `http://localhost:5000/api`) |

## Development

```bash
npm run dev       # starts dev server on http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
npm run lint      # ESLint
```

## Features

- **Dashboard** — income/expense summary cards, area chart, recent transactions
- **Transactions** — full table with search, filters, bulk delete, CSV import, duplicate
- **Voice input** — record a voice note and have it parsed into a transaction automatically
- **AI receipt scanning** — upload a receipt image and extract transaction details via AI
- **Reports** — view generated reports and schedule recurring email delivery
- **Analytics** — expense breakdown pie chart and trend data
- **Settings** — account profile, appearance (light/dark/system theme), billing

## Design system

The UI is built on a two-layer token system defined in `src/index.css`.

**Semantic tokens** (Radix-style, theme-aware):

| Token | Light | Dark |
|-------|-------|------|
| `--background` | `oklch(1 0 0)` | `oklch(0.141 ...)` |
| `--foreground` | `oklch(0.141 ...)` | `oklch(0.985 0 0)` |
| `--primary` | near-black | near-white |
| `--muted` / `--muted-foreground` | subtle fill / dim text | same |
| `--destructive` | red | brighter red |

**Brand tokens** (fixed, theme-independent):

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-green` | `rgb(22, 97, 20)` | Income chart series, accent highlights |
| `--brand-green-light` | `rgb(159, 255, 89)` | Hover states, badges |
| `--app-dark` | `rgb(23, 23, 23)` | Navbar, footer — always dark regardless of theme |
| `--surface-alt` | `rgb(243, 244, 247)` | Page section backgrounds (light) |
| `--surface-border` | `rgba(23, 23, 23, 0.2)` | Subtle dividers |

All tokens are consumed via Tailwind's `@theme inline` block, so they are available as utility classes (e.g. `bg-brand-green`, `text-app-dark`, `border-surface-border`).

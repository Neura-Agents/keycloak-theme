# AgenticAI Custom Keycloak Theme

A premium, custom-branded authentication theme built with **Keycloakify** and **React**. This repository manages the styling and UX for the AgenticAI login, registration, and account management screens.

---

## 🚀 Key Features

- **Keycloakify Integration**: Bridges Keycloak's FreeMarker templates with modern React UI.
- **Storybook-First Workflow**: Full UI development and testing independent of a running Keycloak server.
- **Theming & Branding**: Consistent aesthetic with the main AgenticAI platform using Tailwind CSS v4 and Shadcn UI.
- **Custom Pages**: Specialized login, registration, OTP, and password reset screens.
- **Built-in Support**: Seamless OIDC support for frontend and backend redirect flows.

---

## 🛠 Technology Stack

- **Keycloakify**: Core framework for React-based Keycloak themes.
- **Storybook**: Component development and UI documentation.
- **React 19 + Vite 8**: Modern development infrastructure.
- **Tailwind CSS v4**: High-performance, token-based styling.
- **Shadcn UI & Radix UI**: Accessible, pre-styled primitives.
- **HugeIcons & Lucide**: Premium iconography.

---

## 📥 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A running Keycloak instance (for final deployment) or local Docker setup.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Initialize Keycloakify extensions:
   ```bash
   npm run postinstall
   ```

### Development (Storybook)

Develop and preview theme pages without Keycloak:
```bash
npm run storybook
```

### Production Build

Package the theme for deployment to a Keycloak server:
```bash
npm run build-keycloak-theme
```

The output will be generated in `dist_keycloak/`, which can then be mounted or copied to your Keycloak `themes/` directory.

---

## 🏗 Directory Structure

- **`.storybook/`**: Configuration for theme visualization.
- **`src/`**: React source code for the theme pages.
- **`public/`**: Static assets (logos, icons, fonts).
- **`dist_keycloak/`**: Generated build artifacts for the Keycloak server.

---

## 🔒 Security

This theme is designed to securely capture and handle credentials during the OIDC flow, ensuring compliance with Keycloak's security protocols while providing a seamless, on-brand user experience.

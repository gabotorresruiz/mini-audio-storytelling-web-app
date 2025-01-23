# Mini Audio Storytelling Web App

## Project Overview

This repository contains two main components:

1. **Express.js API Application**: A backend service for user authentication, JWT token handling and getting the audio samples.
2. **Next.js + TypeScript Application**: A frontend web application that integrates SSR and client-side rendered components for user interaction.

### Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Backend (Express.js API)](#backend-express-api)
  - [Features](#features)
  - [API Endpoints](#api-endpoints)
- [Frontend (Next.js)](#frontend-nextjs)
  - [Features](#features-1)
  - [Pages](#pages)
- [Architectural Choices](#architectural-choices)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Docker Setup](#docker-setup)
- [Technologies Used](#technologies-used)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
  - [DevOps](#devops)

---

### Project Structure

```
├── app/
│   ├── backend/            # Express.js API application
│   └── frontend/           # Next.js application
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # Project documentation
```

### Getting Started

#### Prerequisites

- `Node.js v23.6.0` (I recommend to use [nvm](https://github.com/nvm-sh/nvm) to easily change Node versions)
- Docker and Docker Compose

#### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:gabotorresruiz/mini-audio-storytelling-web-app.git
   cd mini-audio-storytelling-web-app
   ```

2. Install dependencies for both backend and frontend:

   ```bash
   # Backend
   cd app/backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. Create environment file for the backend application (`.env`). Refer to `.env.default`

4. Create environment file for the frontend application (`.env.production`). Refer to `.env.default`

5. Add the Freesound API Key (`FREESOUND_API_KEY`) to `app/backend/.env.default`:
  
    ```
    FREESOUND_API_KEY=<api_key>
    ```

    You can create your own Freesound account for free here --> https://freesound.org/home/login/?next=/apiv2/apply

    After you create your account, you should be able to see the API Key provided by Freesound.

5. Start the application from the root:

   ```bash
   docker compose up -d --build
   ```

6. That's it! Now you can go to http://localhost:3000 and see the app up and running ;)

---

### Backend (Express.js API)

#### Features

- User authentication with JWT.
- RESTful endpoints for user and audio samples management.
- Integration with a database for user data persistence.

#### API Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | `/api/auth/signup` | Register a new user    |
| POST   | `/api/auth/signin` | Authenticate a user    |
| GET    | `/api/audios`      | Retrieve audio samples |

---

### Frontend (Next.js)

#### Features

- Server-Side Rendering (SSR) and client-side rendering.
- User authentication with `next-auth`.
- Styled components and Material UI for design.
- Axios for API requests.

#### Pages

- **SignIn**: Login page for users.
- **SignUp**: Registration page for new users.
- **Home**: Dashboard or landing page after login.

---

## Architectural Choices

### Backend

- **Authentication**: `JWT` for secure token-based authentication.
- **Folder Structure**:
  ```
  backend/                # Express.js API application
  ├── src/
  │   ├── config/         # Configuration files (e.g., environment setup, constants)
  │   ├── controllers/    # Handles request logic
  │   ├── middleware/     # Custom middleware (e.g., auth validation)
  │   ├── routes/         # API route definitions
  │   ├── services/       # Business logic and external API integration
  │   ├── types/          # TypeScript type definitions
  │   └── utils/          # Helper functions and utilities
  ├── app.ts              # Application setup and middleware
  └── server.ts           # Server initialization
  ```
- **Design Decisions**: the backend adheres to a structured approach to separate concerns and enhance maintainability (Layered Architecture Pattern)

  Key aspects:

  - **Configuration Layer**: Contains files for environment variables, constants, and external service configurations.
  - **Controller Layer**: Manages HTTP request and response logic, delegating business operations to the service layer.
  - **Middleware Layer**: Encapsulates reusable logic such as authentication and error handling.
  - **Service Layer**: Encodes the core business logic and integrates with external APIs or the data layer.
  - **Utilities and Types**: Provides helper functions and TypeScript types to promote code reuse and type safety.

### Frontend

- **Authentication**: `next-auth` simplifies user session management and integrates well with third-party providers.
- **Folder Structure**:
  ```
  frontend/
  ├── src/
  │   ├── app/            # Application routes and layout
  │   │   ├── api/        # API handlers
  │   │   ├── components/ # Reusable UI components
  │   │   ├── signin/     # Sign-in page components and logic
  │   │   ├── signup/     # Sign-up page components and logic
  │   │   ├── layout.tsx  # Global layout component
  │   │   └── page.tsx    # Main page component
  │   ├── context/        # Global context providers
  │   ├── HOC/            # Higher-order components
  │   ├── hooks/          # Custom React hooks
  │   ├── lib/            # Library functions and external integrations
  │   ├── schemas/        # Validation schemas
  │   ├── styles/         # Global and component-specific styles
  │   ├── types/          # TypeScript type definitions
  │   └── utils/          # Shared utility functions
  ```
- **Design Decisions**: the frontend has been carefully designed to ensure scalability and maintainability. This approach enables the application to grow and adapt to future requirements while keeping the codebase organized and easy to manage.

  Key aspects:

  - **Modular Structure**: The project is divided into clearly defined folders such as `components`, `context`, `hooks`, and `utils`, ensuring separation of concerns and improving readability.
  - **Scalability**: The folder structure allows easy addition of new features without disrupting existing functionality. For example, the `api/` directory under `app/` organizes API routes logically, while `schemas/` centralizes validation logic for consistent and reusable data validation.
  - **Maintainability**: Reusable and modular components within the `components/` directory help avoid duplication, while the `HOC/` folder allows for higher-order components that encapsulate common functionality.
  - **State Management**: Context is handled in the `context/` folder, providing a centralized and predictable state management pattern.
  - **Enhanced Developer Experience**: Types in the `types/` directory improve type safety with TypeScript, reducing runtime errors. Similarly, shared utility functions in `utils/` and custom hooks in `hooks/` simplify common tasks, making development faster and more consistent.

---

## Audio Fetching with [Freesound API](https://freesound.org/docs/api/index.html)

### Integration Details

The project includes functionality to fetch audio files from the [Freesound API](https://freesound.org/docs/api/index.html). This allows the application to access a rich library of sound effects and audio samples for dynamic content generation. The integration is implemented in the following way:

- **API Client**: Axios is used to interact with the [Freesound API](https://freesound.org/docs/api/index.html) endpoints.
- **Environment Variables**: API keys and other sensitive information for [Freesound API](https://freesound.org/docs/api/index.html) access are stored securely in .env files.
- **Usage**: Audio fetching is integrated into specific frontend components coming from backend endpoint `/api/audios`.

Refer to the respective `utils` or `hooks` directories for implementation details and examples of usage.

---

## Docker Setup

### Why Docker?

By containerizing the applications, we achieve the following benefits:

1. **Environment Consistency**: Docker ensures that the application runs identically across different environments (development, staging, and production), reducing "it works on my machine" issues.
2. **Simplified Dependency Management**: All dependencies, tools, and configurations required for the project are encapsulated in Docker images, avoiding conflicts on host machines.
3. **Ease of Setup**: Anyone can get started quickly with minimal manual configuration. A single command (`docker compose up -d --build`) sets up the entire application stack.
4. **Isolation**: The backend and frontend are run in isolated containers, avoiding conflicts between their runtime environments.
5. **Portable Development**: Docker ensures that the same application image can run on any machine that supports Docker, enabling seamless collaboration among team members.

---

## Technologies Used

### Backend

- Node.js
- Express.js
- Typescript
- Axios
- LowDb
- JSON Web Tokens (JWT)

### Frontend

- Next.js
- TypeScript
- next-auth
- Axios
- Material-UI
- styled-components

### DevOps

- Docker
- Docker Compose

---

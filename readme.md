#Full Stack Test Task

This project is a simple authentication system with Sign In and Sign Up pages. It uses React and Styled Components for the frontend, offering modern styling and a clean design. The project includes:


##Tech Stack

React: Frontend library

Styled Components: For CSS-in-JS styling

React Router: For routing

TypeScript: For type safety

Nest.js: Backend runtime

##Installation

Clone the repository:

git clone <repository-url>
cd <repository-folder>

##Install dependencies for both frontend and backend:

cd frontend
npm install
cd ../backend
npm install

##Start the development servers concurrently:

npm start

This will start both the frontend and backend simultaneously. Open your browser and navigate to:

http://localhost:3000

Project Structure

/project-root
  ├── /frontend/             # Frontend application
  │     ├── components/      # Reusable UI components
  │     ├── context/         # Context API for global state (if needed)
  │     ├── pages/           # SignIn and SignUp pages
  │     │     ├── SignIn.tsx
  │     │     ├── SignUp.tsx
  │     ├── App.tsx          # Main app entry point
  │     ├── index.tsx        # React entry point
  │     ├── styles/          # Global and shared styles (if applicable)
  ├── /backend/              # Backend application
  │     ├── routes/          # API routes
  │     ├── controllers/     # Route controllers
  │     ├── models/          # Database models
  │     ├── server.js        # Backend entry point
  ├── jest.config.js or .cjs # Jest configuration
  ├── jest.setup.ts          # Jest setup for jest-dom
  ├── babel.config.json      # Babel configuration

Usage

Running Frontend and Backend Concurrently

The start script in package.json is configured to run both the frontend and backend simultaneously using concurrently:

"scripts": {
  "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\"",
  "start:frontend": "cd frontend && npm start",
  "start:backend": "cd backend && npm run start"
}


Scripts

npm start - Start the development servers (frontend and backend).

npm run build - Build the frontend project for production.

npm test - Run tests.

License

This project is licensed under the MIT License. See the LICENSE file for details.
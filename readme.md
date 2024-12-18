# EasyGenerator Test Project

This project is a secure, scalable, and interactive full-stack web application built using NestJS for the backend and React with TypeScript for the frontend. The system includes user authentication, profile management, rate limiting, CORS and other security best practices.


## Backend Setup
    Install dependencies:
        npm install
    Create a .env file:
    Start the backend server:
      npm run start:dev

## Frontend Setup
    Install dependencies:
        npm install
    Start the frontend application:
        npm run dev


## Usage

Running Frontend and Backend Concurrently

The start script in package.json is configured to run both the frontend and backend simultaneously using concurrently:

"scripts": {
  "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\"",
  "start:frontend": "cd frontend && npm start",
  "start:backend": "cd backend && npm run start"
}


## Scripts

npm start - Start the development servers (frontend and backend).

npm run build - Build the frontend project for production.

npm test - Run tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

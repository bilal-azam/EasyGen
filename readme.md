#Full Stack Test Task

This project is a simple authentication system with Sign In and Sign Up pages. It uses React and Styled Components for the frontend, offering modern styling and a clean design. The project includes:


##Install dependencies for both frontend and backend:

cd frontend
npm install
cd ../backend
npm install

##Start the development servers concurrently:

npm start

This will start both the frontend and backend simultaneously. Open your browser and navigate to:

http://localhost:3000


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
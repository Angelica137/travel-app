# Travel Planner

## Description
Travel Planner is a front-end web application designed to assist users with planning their trips. Using the app the user can:

- Search for their travel destination.
- Select arrival date.
- Retrieve weather forecasts for that date. 

Built with an Express server and Webpack for bundling

## Features
- Destination search
- Date selection for travel
- Weather forecast retrieval
- Responsive design

## Setup
This project requires Node.js installed in your local machine.

## Installation
To set up the application locally, follow these steps:

Clone the repository:
```git clone <repository-url>```

Navigate to the project directory:
```cd travel-app```

Install the necessary packages:
```npm install```

## Running the App

- **npm run build:** Creates a production build of the app by bundling the assets using webpack.prod.js.
- **npm start:** Launches the app in development mode with hot reloading, facilitated by Webpack Dev Server.
- **npm run start:server:** Starts the Express server for the backend API.
- **npm run dev:server:** Uses nodemon to start the Express server, which will automatically restart upon any server-side code changes.
- **npm test:** Runs the Jest test suites for the application.

## Project Structure
**src/:** Contains the source code for the client and the server.
- **client/:** Frontend-related files, including styles, views, and JS entry point.
- **server/:** Backend server code and API handlers.
- **images/:** Storage for image assets used in the app.
- **dist/:** Output directory for the Webpack builds.
- **webpack.config.js:** Base Webpack configuration.
- **webpack.dev.js:** Development-specific Webpack configuration.
- **webpack.prod.js:** Production-specific Webpack configuration.

## Configuring Webpack
Webpack is configured with separate configurations for development (webpack.dev.js) and production (webpack.prod.js). The base configuration (webpack.config.js) contains shared configurations such as loaders and plugins.

## API Reference
The application utilizes the Weatherbit API for fetching weather forecasts. Ensure that you have an API key and configure it in the .env file under WEATHERBIT_API_KEY.

# Amazon Data Explorer

Amazon Data Explorer is a web application built using Node.js, Express.js, and MongoDB to efficiently extract real-time product data from Amazon and provide intelligent recommendations based on customer reviews. The application aims to enhance decision-making for shoppers by offering valuable insights into product specifications and rankings.

## Features

- Real-time Product Data Extraction: The application utilizes the Scraper API to fetch real-time product data from Amazon, ensuring up-to-date information for users.

- User-Friendly Web Interface: The web interface is designed using EJS templates and Bootstrap, providing a seamless and intuitive browsing experience.

- Intelligent Recommendations: Custom algorithms are employed to rank and display the top 20 recommended products, based on customer reviews and ratings.

- Robust Caching Mechanism: To optimize performance, the application implements a caching mechanism that minimizes API calls and improves response times.

## Installation

1. Clone the repository: ```git clone https://github.com/saideepoki/Amazon-Data-Explorer.git```
2. Install dependencies: ```npm install```

## Usage

1. Run the application: ```npm start```
2. Open your web browser and visit: `http://localhost:8000`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS Templates
- Bootstrap
- Scraper API

## Project Structure

The project is organized as follows:

- `index.mjs`: The main entry point of the application.
- `config/mongoose.js`: Configuration file for connecting to the MongoDB database.
- `models/`: Contains the Mongoose models for storing product and review data.
- `routes/`: Contains the Express.js routers for handling different routes.
- `controllers/`: Contains the controllers for handling various actions.
- `views/`: Contains the EJS templates for rendering the web pages.
- `assets/`: Contains the static assets such as CSS, images, and JavaScript files.


const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from the .env file
dotenv.config();

const port = process.env.PORT


// Define a route that handles GET requests to '/api'


// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from the .env file
dotenv.config();

const port = process.env.PORT || 3000;



// Define a route that handles GET requests to '/api'
app.get('/api', (req, res) => {
    // Get query parameters from the request
    const slackName = req.query.slack_name;
    const track = req.query.track;

    // Get the current date and time
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = currentDate.toISOString();

    // Create the response JSON object
    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: 'https://github.com/murytarlah/hng-stage-one-task/blob/main/app.js',
        github_repo_url: 'https://github.com/murytarlah/hng-stage-one-task',
        status_code: 200,
    };

    // Send the JSON response
    res.json(response);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

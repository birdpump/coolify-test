// Importing the express module
import express from 'express';

// Create an instance of the express application
const app = express();

// Define the port number
const PORT = 3000;

// Define a route for the root URL that returns "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

import express from 'express';

// Create a server
const server = express();

// Handle the default request
server.get("/", (req, res) => {
    res.send("Welcome to Express server");
});

// Listen on the specified port
server.listen(3200, () => {
    console.log("Server is listening on port 3200");
});

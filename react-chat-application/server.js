const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chatApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Mongoose schema and models for users and messages

// Express middleware for handling JSON data

// Express routes for user authentication and messaging

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('message', (data) => {
    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


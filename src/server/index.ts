// server/index.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all origins

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('video-data', (data) => {
    socket.broadcast.emit('video-data', { id: socket.id, data });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    socket.broadcast.emit('user-disconnected', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Streaming server listening on port ${PORT}`);
});

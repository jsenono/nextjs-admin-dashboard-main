// server/index.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  socket.on('video-data', (data) => {
    socket.broadcast.emit('video-data', data);
  });
});

server.listen(3001, () => {
  console.log('Streaming server listening on port 3001');
});

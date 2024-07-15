// index.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let room = {};

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', ({ roomId }) => {
    socket.join(roomId);
    room[roomId].push(socket.id);
    console.log(`User joined room ${roomId}`);
  });

  socket.on('offer', (data) => {
    io.to(data.roomId).emit('offer', data);
  });

  socket.on('answer', (data) => {
    io.to(data.roomId).emit('answer', data);
  });

  socket.on('candidate', (data) => {
    io.to(data.roomId).emit('candidate', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

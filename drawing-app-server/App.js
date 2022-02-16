const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
require('dotenv').config();
const cors = require('cors');
const authHandler = require('./Authentication/authUser');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))
// app.use(cors());

const rooms=[];

//Running when client connect to socket
io.use(authHandler)
io.on('connection', (socket) => {
    socket.on('createRoom', ({ name, roomName, pass }) => {
        //join to socket
        socket.join(roomName, pass);
        console.log('room', roomName);
        console.log(name + 'join to the app');
        console.log('socket', socket.id);
        rooms.push({sockedId:socket.id,roomName:roomName, pass:pass});
        console.log("rooms",rooms);
    });
    io.to(socket).emit('getRooms', { rooms:rooms });


  
  
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
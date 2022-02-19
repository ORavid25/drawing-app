const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
require('dotenv').config();
const cors = require('cors');
const router = require('./router');
const authHandler = require('./Authentication/authUser');
const formatMessage = require('./messagesFormat');
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require('./users');

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
app.use(cors());
app.use(router);

const rooms = [];

//Running when client connect to socket
io.use(authHandler)
// Run when client connects
io.on('connection', (socket) => {
    console.log("New WS connection");
    console.log("rooms: " + rooms.length);
    
    socket.on('joinRoom', ({ username, room }) => {
        io.to(room).emit('message',{msg:'Welcome to Chat!'} );
        const user = userJoin(socket.id, username, room);
       
        socket.join(user.room);
        console.log("socketRoom",socket.rooms);
        console.log("rooms",rooms);
        rooms.push({room,username});
        // Welcome current user
        
        // Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit(
                'message',
                formatMessage("admin", `${user.username} has joined the chat`)
            );


        // Listen for chatMessage
        socket.on('chatMessage', msg => {
            const user = getCurrentUser(socket.id);

            io.to(user.room).emit('message', formatMessage(user.username, msg));
        });

        // Runs when client disconnects
        socket.on('disconnect', () => {
            const user = userLeave(socket.id);

            if (user) {
                io.to(user.room).emit(
                    'message',
                    formatMessage("admin", `${user.username} has left the chat`)
                );

                // Send users and room info
                io.to(user.room).emit('roomUsers', {
                    room: user.room,
                    users: getRoomUsers(user.room)
                });

              
            }
        });
    });
});
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
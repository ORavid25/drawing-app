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

const rooms =[]
const outputRooms=[]


//Running when client connect to socket
io.use(authHandler)
// Run when client connects
io.on('connection', (socket) => {
    console.log("New WS connection");
      // send rooms to client
    socket.emit("getRooms",{
        rooms:rooms
    });
// create room and push it to array
    socket.on('createRoom',({username,roomName,Password})=>{
        const user = userJoin(socket.id, username, roomName);
        rooms.push({roomName,Password,user})

        console.log("User Created",rooms)
    })

    // join to room from client ui into the server  
    socket.on('joinRoom', ({ username, roomName, Password }) => {
         console.log("roomName",roomName);
         console.log("username",username);
        io.to(roomName).emit('message',{msg:'Welcome to Chat!'} );
        if(Password!==''){
            console.log("hass password");
        }
        else{
            socket.join(roomName)
        }
        console.log("rooms",rooms);
        
        // console.log("outputRooms",outputRooms);
        // Welcome current user

        // Broadcast when a user connects
        socket.broadcast
            .to(roomName)
            .emit(
                'message',
                formatMessage("admin", `${username} has joined the chat`)
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
                    formatMessage("admin", `${username} has left the chat`)
                );

                // Send users and room info
                io.to(user.room).emit('roomsData', {
                    room: user.room,
                    users: getRoomUsers(user.room)
                });
            }
        });
    });

});
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
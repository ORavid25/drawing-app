const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const cors = require('cors');
const authHandler = require('./Authentication/authUser');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

//Running when client connect to socket
io.on('connection', (socket)=>{
    console.log('socket inn');
})

const PORT = 3000|| process.env.PORT;

server.listen(PORT,() => console.log(`Server running on port ${PORT}`));
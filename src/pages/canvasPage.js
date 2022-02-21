import React, { useEffect, useState, useContext } from 'react';
import '../css/CanvasPage.css';
import { io } from 'socket.io-client';
import useAuth from "../users/useAuth";
import { SocialDrawerContext } from '../context';
import ChatMessage from '../components/ChatMessage';
import Canvas from '../components/Canvas';
import queryString from 'query-string';

const CanvasPage = ({ location }) => {
    const [user, token] = useAuth();
    const [message, setMessage] = useState('');
    const [room, setRoom] = useState('');
    const [userName, setUserName] = useState('');
    let socket;
    const ENDPOINT = 'http://localhost:3000/';

//     const getUserName=async () => {
//         let userName = await user.name;
//         console.log("userName",userName);
//         setUserName(userName);
//     }
// useEffect(() => {
//     getUserName();
// }, [user]);



    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setRoom(room);

        socket.emit('joinRoom', { username:name, room }, (error) => {
          
            if (error) {
                console.log("Error to join room")
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
     console.log("socket",socket);
     socket.on('message', (msg) => {
         console.log("fromuef msg",msg);
        setMessage(msg)
    })
    }, [socket]);




    console.log("msg", message);
    return (
        <div className="container">
            <div className="components-wrapper">
                <div className="canvas">
                    <Canvas/>
                </div>
                <div className="chat">
                    <ChatMessage/>
                </div>
            </div>

        </div>
    );
};

export default CanvasPage;

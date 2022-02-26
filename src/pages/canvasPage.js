import React, { useEffect, useState, useContext } from 'react';
import '../css/CanvasPage.css';
import { io } from 'socket.io-client';
import useAuth from "../users/useAuth";

import ChatMessage from '../components/ChatMessage';
import Canvas from '../components/Canvas';
import queryString from 'query-string';
import {SocialDrawerContext} from "../context";


const CanvasPage = ({ location }) => {
    const [user, token] = useAuth();
    const [message, setMessage] = useState('');
    const [room, setRoom] = useState('');
    const [userName, setUserName] = useState('');
    const socket = io(`http://${window.location.hostname}:3000`,token && { query: { token } })
    // const {socket} = useContext(SocialDrawerContext);
    
const joinRoom=()=>{
    const { name, room } = queryString.parse(location.search);
    console.log("name: " + name);
    setRoom(room);
    socket.emit('joinRoom', { username:name, roomName:room,Password:'' }, (error) => {
        if (error) {
            console.log("Error to join room")
        }
    });
}


    useEffect(() => {
        joinRoom();
    },[]);

    useEffect(() => {
     console.log("socket",socket);
     socket.on('message', (msg) => {
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

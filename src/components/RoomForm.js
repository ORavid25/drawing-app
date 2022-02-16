import React, { useState } from 'react';
import '../css/RoomForm.css'
import { Link, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';


const RoomForm = ({ token, user }) => {
    const [roomName, setRoomName] = useState('');
    const [pass, setPass] = useState('');

    const socket = io(`http://${window.location.hostname}:3000`, token && { query: { token } });

    const createRoom = () => {
        if (roomName !== null && pass !== null) {
            socket.emit('createRoom',{name:user.name,roomName,pass});
        }
    }



    const history = useHistory();
    return (
        <div className="inputs-room-container">
            <div className="create-room-wrapper">
                <div className="title-container">
                    <h1>Create Room</h1>
                    <h2>Here you can open new room with friends, choose room name and pass. share it with your friends or family.😋</h2>
                </div>
                <div className="fields-wrapper">
                    <div className="fields-container">
                        <label >Room Name</label>
                        <input
                            placeholder='Enter Room Name'
                            onChange={(e) => setRoomName(e.target.value)}></input>
                    </div>
                    <div className="fields-container">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder='Enter Room Pass'
                            onChange={(e) => setPass(e.target.value)}></input>
                    </div>
                </div>

                <div className="btnCreateRoomContainer">
                    <button className="btnCreateRoom" onClick={() => {
                        {
                            createRoom();

                        }
                        history.push('/canvasRoom');
                    }}>Create</button>
                </div>

            </div>
        </div>
    );
};

export default RoomForm;

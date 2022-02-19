import React, { useState } from 'react';
import '../css/RoomForm.css'
import { Link, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
// import useAuth from '../users/useAuth';


const RoomForm = ({user,token}) => {
    const [roomName, setRoomName] = useState('');
    const [pass, setPass] = useState('');
    const socket = io()
    // const [user, token] = useAuth();
    const history = useHistory();


    // const createRoom = () => {

    //     if (roomName !== null) {
    //         socket.on('joinRoom', { username: user.name, room: roomName });
    //     }
    // }


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
                    <Link to={`/canvasRoom?name=${user?.name &&user.name} &room=${roomName}`}>
                        <button className="btnCreateRoom"
                            type="submit">Create
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default RoomForm;

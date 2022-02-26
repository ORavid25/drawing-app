import React, { useState } from 'react';
import '../css/RoomForm.css'
import { Link, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
// import useAuth from '../users/useAuth';


const RoomForm = ({ user, token, setToTrueIfRoomCreate }) => {
    const [roomName, setRoomName] = useState('');
    const [pass, setPass] = useState('');
    const socket = io(`http://${window.location.hostname}:3000`)
    const history = useHistory();


    const sendResBack = () => {
        let res = true;
        console.log("res: " + res);
        setToTrueIfRoomCreate(res)
    }

    const createRoom = () => {
        socket.emit('createRoom', { username: user.name, roomName: roomName, Password: pass })
        
    }


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
                    
                    <button className="btnCreateRoom"
                        onClick={() => {
                            sendResBack()
                            createRoom()
                        }}
                        type="submit">Create
                    </button>

                </div>

            </div>
        </div>
    );
};

export default RoomForm;

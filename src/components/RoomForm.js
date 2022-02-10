import React from 'react';
import '../css/RoomForm.css'
import { Link, useNavigate } from 'react-router-dom';


const RoomForm = () => {
const navigate = useNavigate();
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
                        <input placeholder='Enter Room Name'></input>
                    </div>
                    <div className="fields-container">
                        <label>Password</label>
                        <input type="password" placeholder='Enter Room Pass'></input>

                    </div>
                </div>

                <div className="btnCreateRoomContainer">
                    <button className="btnCreateRoom" onClick={()=>{
                        navigate('/canvasRoom');
                    }}>Create</button>
                </div>

            </div>
        </div>
    );
};

export default RoomForm;

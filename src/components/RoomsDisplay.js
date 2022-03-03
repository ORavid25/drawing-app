import React, { useState, useEffect } from "react";
import "../css/RoomsDisplay.css";
import { FcLock, FcUnlock } from 'react-icons/fc';
import { Link,useHistory } from 'react-router-dom';



const RoomCard = ({ room, user,setShowModal,setModalRoomName }) => {

  const history = useHistory();

  const checkIfLocked = () => {
    if (room.Password !== '') {
      console.log("has password");
      setShowModal(true);
      setModalRoomName(room.roomName);
    }
    else {
      history.push(`/canvasRoom?name=${user?.name && user.name} &room=${room.roomName}`)
    }
  }


  return (
    <div onClick={checkIfLocked}
      dir="rtl" className="card-container">
      <div className="roomName-container">
        <h2>{room.roomName}</h2>
      </div>
      <div>
        {/* icon lock/unlocked */}
        {room.Password !== '' ? <h3>Locked <FcLock size={30} /></h3>
          : <h3>Unlocked <FcUnlock size={30} /></h3>
        }
      </div>
    </div>

  );
};

const RoomsDisplay = ({ setShowModal, user, roomsData,setModalRoomName }) => {


  return (
    <div className="rooms-container">
      {roomsData ? roomsData.map((room, index) => (
        <RoomCard room={room} index={index} user={user} setShowModal={setShowModal} setModalRoomName={setModalRoomName} />
      )) : <h1>nooo roomss</h1>}
    </div>
  );
};

export default RoomsDisplay;

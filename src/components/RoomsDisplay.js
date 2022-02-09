import React from "react";
import "../css/RoomsDisplay.css";
import {FcLock,FcUnlock} from 'react-icons/fc';

const RoomCard = () => {
  return (
    <div dir="rtl" className="card-container">
      <div className="roomName-container">
        <h2>Room 1</h2>
      </div>
      <div>
        {/* icon lock/unlocked */}
        <h3>Unlocked <FcUnlock size={30}/></h3>
      </div>
    </div>
  );
};

const RoomsDisplay = () => {
  return (
    <div className="rooms-container">
      <RoomCard />
      <RoomCard />
      <RoomCard />

      <RoomCard />

      <RoomCard />

      <RoomCard />

      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />

      
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />

      <RoomCard />

      <RoomCard />

    </div>
  );
};

export default RoomsDisplay;

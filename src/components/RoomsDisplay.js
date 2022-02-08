import React from "react";
import "../css/RoomsDisplay.css";

const RoomCard = () => {
  return (
    <div dir="rtl" className="card-container">
      <div className="roomName-container">
        <p>Room 1</p>
      </div>
      <div>
        {/* icon lock/unlocked */}
        <p>Unlocked</p>
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

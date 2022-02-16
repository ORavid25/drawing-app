import React,{useEffect} from "react";
import "../css/RoomsDisplay.css";
import {FcLock,FcUnlock} from 'react-icons/fc';
import { io } from 'socket.io-client';

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

const RoomsDisplay = ({ token, user }) => {
  const socket = io(`http://${window.location.hostname}:3000`, token && { query: { token } });

  useEffect(() => {
    // const rooms = socket.emit('getRooms');
    socket.on("getRooms", ({ rooms }) => {
      console.log("getRooms",rooms);
    });
  }, []);

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

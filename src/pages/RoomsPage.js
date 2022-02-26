import React, { useEffect, useState, useContext } from "react";
import "../style.css";
import RoomForm from "../components/RoomForm";
import RoomsDisplay from "../components/RoomsDisplay";
import Header from "../components/Header";
import useAuth from "../users/useAuth";
import { io } from 'socket.io-client';
// import {SocialDrawerContext} from "../context";



const RoomsPage = () => {
  // const { user,setUser} = useContext(SocialDrawerContext);
  const [user, token] = useAuth();
  const [activeRooms, setActiveRooms] = useState([])
  const socket = io(`http://${window.location.hostname}:3000`,token && { query: { token } })
  // const {socket} = useContext(SocialDrawerContext);
  const [roomsData, setRoomsData] = useState([])
  const [ifRoomCreate, setIfRoomCreate] = useState(false);
 

  useEffect(() => {
    getRoomsFromServer();
  }, [ifRoomCreate]);


  const getRoomsFromServer = () => {
    socket.on("getRooms", ({ rooms }) => {
      console.log("getRooms", rooms);
      setRoomsData(rooms);
    });
  }

  // useEffect(() => {
  //   console.log("roomData", roomsData);
  // }, [roomsData]);

  const setToTrueIfRoomCreate = (flag) => {
    setIfRoomCreate(flag);
    console.log("flag", flag);
  }


   
  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-container">
        <div className="create-room">
          <RoomForm token={token} user={user && user} setToTrueIfRoomCreate={setToTrueIfRoomCreate} />
        </div>
        <div className="roomDisplay-container">
          <RoomsDisplay token={token} user={user && user} socket={socket} roomsData={roomsData} />
        </div>
      </div>
    </div>
  );
};
export default RoomsPage;

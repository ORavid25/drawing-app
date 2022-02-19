import React, { useEffect, useState,useContext } from "react";
import "../style.css";
import RoomForm from "../components/RoomForm";
import RoomsDisplay from "../components/RoomsDisplay";
import Header from "../components/Header";
import useAuth from "../users/useAuth";
import { SocialDrawerContext } from "../context";


const RoomsPage = () => {
  // const { user,setUser} = useContext(SocialDrawerContext);
  const [user, token] = useAuth();
  const [activeRooms, setActiveRooms] = useState([])
  const {socket} = useContext(SocialDrawerContext);
 


  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-container">
        <div className="create-room">
          <RoomForm token={token} user={user&&user}/>
        </div>
        <div className="roomDisplay-container">
          <h1>{user&&user.name}</h1>
          <RoomsDisplay token={token} user={user&&user} socket={socket} />
        </div>
      </div>
    </div>
  );
};
export default RoomsPage;

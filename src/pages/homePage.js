import React, { useEffect, useState,useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bigRoller from "../assats/paintroller1.png";
import {  Link } from "react-router-dom";
import {GoPaintcan} from "react-icons/go"
import {FiUsers} from "react-icons/fi";
import {FaUserEdit} from "react-icons/fa";
import { io } from 'socket.io-client';
import {SocialDrawerContext} from '../context';
import useAuth from "../users/useAuth";

const HomePage = () => {
  const {socket,setSocket} = useContext(SocialDrawerContext);
  const [user, token] = useAuth();

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`, token && { query: { token } });
    setSocket(newSocket);
    return ()=>{
      newSocket.disconnect()
    }
  }, []);

  console.log("socket", socket);
 
 
  return (
    <div className="main-wrapper">
      <Header  />
      <div className="main-container">
        <div className="logo-container">
          <img src={bigRoller} width="500" />
        </div>
        <div className="info-container">
          <h1 className="">Welcome to our social drawing App</h1>
          <h2>Collaborative drawing board with rooms and chat abilities.</h2>
          <p>invite friends and family and start the fun!</p>

          <Link to="/rooms">
            <button type="button" className="startNowBtn">
              Start Now!
            </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="info-content">

         <div className="flex-layout">
             <div className="explain-web-card">
                <FaUserEdit size={150}/>
                 <h3>Sign in / Sign up and create your first room !😎</h3>
             </div>
             <div className="explain-web-card">
                 <FiUsers size={150}/>
             <h3>invite friends and family to your own room👏</h3>

             </div>
             <div className="explain-web-card">
                <GoPaintcan size={150}/>
             <h3>Use canvas and draw what ever you want !🎨</h3>

             </div>

         </div>
      
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

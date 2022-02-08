import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bigRoller from "../assats/paintroller1.png";
import {  Link } from "react-router-dom";
import RoomsDisplay from "../components/RoomsDisplay";

const homePage = () => {
  return (
    <div className="main-wrapper">
      <Header />
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

          <h1>HelloWorld</h1>
            <RoomsDisplay/>
      
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default homePage;

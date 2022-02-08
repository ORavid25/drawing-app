import React, { useState } from 'react';
import "../style.css";

import RoomForm from '../components/RoomForm';
import RoomsDisplay from '../components/RoomsDisplay';
import Header from '../components/Header';

const RoomsPage = () => {
    return (
        <div className="main-wrapper" >
            <Header/>
            <div className="main-container">
                <div className="create-room">
                   
                    <RoomForm />
                   
                </div>
                <div className="roomDisplay-container" >

                    <RoomsDisplay/>
                </div>
            </div>
        </div>
    )

}
export default RoomsPage;
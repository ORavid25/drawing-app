import React, { useState } from 'react';
import "../style.css";

const RoomsPage = () => {
    return (
        <div className="main-wrapper" >
            <div className="header-container"></div>
            <div className="main-container">
                <div className="create-room" style={{backgroundColor: 'red'}}>
                    <button className="btnCreateRoom">צור חדר</button>
                </div>
                <div className="channels" style={{backgroundColor: 'green'}} >

                </div>
            </div>
        </div>
    )

}
export default RoomsPage;
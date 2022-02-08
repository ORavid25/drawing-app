import React from "react";

const roomCard = () => {
  return (
    <div>
      <div style={{backgroundColor:'green'}}>
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
  return <div className="rooms-container"></div>;
};

export default RoomsDisplay;

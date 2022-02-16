import React from "react";
import "../style.css";

import RoomForm from "../components/RoomForm";
import RoomsDisplay from "../components/RoomsDisplay";
import Header from "../components/Header";
import useAuth from "../users/useAuth";

const RoomsPage = () => {
  // const { user,setUser} = useContext(SocialDrawerContext);
  const [user, token] = useAuth();
  console.log("RoomsPage-", user);

  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-container">
        <div className="create-room">
          <RoomForm token={token} user={user}/>
        </div>
        <div className="roomDisplay-container">
          <RoomsDisplay token={token} user={user}/>
        </div>
      </div>
    </div>
  );
};
export default RoomsPage;

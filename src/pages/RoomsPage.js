import React, { useEffect, useState, useContext } from "react";
import "../style.css";
import RoomForm from "../components/RoomForm";
import RoomsDisplay from "../components/RoomsDisplay";
import Header from "../components/Header";
import useAuth from "../users/useAuth";
import { io } from 'socket.io-client';
import Modal from "../components/Modal";
import { useHistory } from 'react-router-dom';



const RoomsPage = () => {
  const [user, token] = useAuth();
  const [showModal, setShowModal] = useState(false)
  const socket = io(`http://${window.location.hostname}:3000`, token && { query: { token } })
  // const {socket} = useContext(SocialDrawerContext);
  const [roomsData, setRoomsData] = useState([])
  const [ifRoomCreate, setIfRoomCreate] = useState(false);
  const [modalRoomName, setModalRoomName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [joinPassRoom, setJoinPassRoom] = useState(false);
  const history = useHistory();



  useEffect(() => {
    getRoomsFromServer();
  }, [ifRoomCreate]);


  const getRoomsFromServer = () => {
    socket.on("getRooms", ({ rooms }) => {
      console.log("getRooms", rooms);
      setRoomsData(rooms);
      setIfRoomCreate(false);
    });
  }

  // useEffect(() => {
  //   console.log("roomData", roomsData);
  // }, [roomsData]);

  const setToTrueIfRoomCreate = (flag) => {
    setIfRoomCreate(flag);
    console.log("flag", flag);
  }

  const checkIfValid = () => {
    socket.on('passwordValid',(resIfJoin) => {
      console.log("msg", resIfJoin);
      setJoinPassRoom(resIfJoin);
    })
  }

  
  ///////////////////////////////////////////////////
  const checkRoomPassword = () => {
    
    socket.emit('joinRoom', { username: user.name, roomName: modalRoomName, Password: inputPassword }, (error) => {
      if (error) {
        console.log(error);
      }
    });
    checkIfValid();
  }

  console.log("roomsData", roomsData);
  console.log("JoinPassRoom", joinPassRoom);
  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-container">
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className="modal-wrapper">
            <h1 style={{ marginTop: 10 }}>Room : {modalRoomName}</h1>
            <div className="modal-input">
              <input type="password" className="inputPassModal" placeholder="Enter Password"
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <button className="btn" onClick={checkRoomPassword}>Join</button>
            </div>

          </div>
        </Modal>
        <div className="create-room">
          <RoomForm token={token} user={user && user} setToTrueIfRoomCreate={setToTrueIfRoomCreate} />
        </div>
        <div className="roomDisplay-container">

          <RoomsDisplay
            token={token}
            user={user && user}
            socket={socket}
            roomsData={roomsData}
            setShowModal={setShowModal}
            setModalRoomName={setModalRoomName}
          />

        </div>
      </div>

    </div>
  );
};
export default RoomsPage;

import React from "react";
import { GrFormClose } from "react-icons/gr";
import '../css/Modal.css';


const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <>
      {showModal ? (
        <div className="modalContainer">
        
            <div className="btnContainer">
            <button className="btnCloseClick">
              <GrFormClose
                size={40}
                onClick={() => {
                  setShowModal(!showModal);
                }}
              />
            </button>
            </div>
         
          <div>{children}</div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
import React from "react";
import {  Route  , Routes} from "react-router-dom";
import CanvasPage from "./canvasPage";
import HomePage from "./homePage";
import RoomsPage from "./RoomsPage";

const routerManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/rooms" element={<RoomsPage/>}/>
      <Route path="/canvasRoom" element={<CanvasPage/>}/>
    
    </Routes>
    
  );
};
export default routerManager;

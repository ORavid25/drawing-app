import React from "react";
import {  Route  , Routes} from "react-router-dom";
import HomePage from "./homePage";
import RoomsPage from "./RoomsPage";

const routerManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/rooms" element={<RoomsPage/>}/>
    
    </Routes>
    
  );
};
export default routerManager;

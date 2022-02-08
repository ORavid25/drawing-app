import React from 'react';
import Logo from "../assats/socialLogo.png";


const Header = () => {
  
return(
    <div className="header-container">
        {/* image container for logo */}
        <div>
            <img src={Logo} width="350"/>
        </div>
       
        {/* signin/signout button + icon */}
        <div>
            <button type="button" className="btn">Sign in</button>
        </div>
        

    </div>
);

}


export default Header;
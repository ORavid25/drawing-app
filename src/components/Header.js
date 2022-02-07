import React from 'react';
import Logo from "../assats/logo-social.png";


const Header = () => {
  
return(
    <div className="header-container">
        {/* image container for logo */}
        <div>
            <img src={Logo} width="200"/>
        </div>
        <h1>SocialDrawer</h1>
        {/* signin/signout button + icon */}
        <div>
            <button type="button" className="btn">Sign in</button>
        </div>
        

    </div>
);

}


export default Header;
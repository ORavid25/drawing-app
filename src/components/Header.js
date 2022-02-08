import React from 'react';
import Logo from "../assats/socialLogo.png";
import {Link} from 'react-router-dom';


const Header = () => {
  
return(
    <div className="header-container">
        {/* image container for logo */}
        <div>
            <Link to="/">
             <img src={Logo} width="350" />
            </Link>
        </div>
       
        {/* signin/signout button + icon */}
        <div>
            <button type="button" className="btn">Sign in</button>
        </div>
        

    </div>
);

}


export default Header;
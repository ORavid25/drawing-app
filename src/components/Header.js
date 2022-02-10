import React from 'react';
import Logo from "../assats/socialLogo.png";
import {Link,useHistory} from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import useAuth from '../users/useAuth';






const Header = () => {
const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();
  console.log("logblat",oktaAuth);
  const [user, token] = useAuth();
  console.log("user",user);

  const login = async () => oktaAuth.signInWithRedirect('/');
//   const logout = async () => oktaAuth.signOut('/');

  
return(
    <div className="header-container">
        
        {/* image container for logo */}
        <div>
            <Link to="/">
             <img src={Logo} width="350" />
            </Link>
        </div>
        {/* <div>{user&&}</div> */}
       
        {/* signin/signout button + icon */}
        <div>
            <button type="button" className="btn" onClick={login}>Sign in</button>
        </div>
        

    </div>
);

}


export default Header;
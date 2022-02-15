import React, {useContext,useEffect} from 'react';
import Logo from "../assats/socialLogo.png";
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import useAuth from '../users/useAuth';




const Header = () => {
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();
    const [userAuth, token] = useAuth();
    
    const login = async () => {
      await oktaAuth.signInWithRedirect()
    
    };

    const logout = async () =>{
        oktaAuth.tokenManager.clear();
        history.push('/')
        //setUser && token to NULL(global context)
    };
    
  



   
    console.log("userAuth",userAuth);
    return (
        <div className="header-container">

            {/* image container for logo */}
            <div>
                <Link to="/">
                    <img src={Logo} width="350" />
                </Link>
            </div>


            {/* signin/signout button + icon */}
            {!userAuth ?
                <div>
                    <button type="button" className="btn" onClick={login}>Sign in</button>
                </div>
                :
                <div>
                    <button type="button" className="btn" onClick={logout}>Log out</button>
                </div>
            }


        </div>
    );

}


export default Header;
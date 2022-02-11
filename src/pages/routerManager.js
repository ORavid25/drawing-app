import React from "react";
import { withRouter, Route, Switch, useHistory } from "react-router-dom";
import CanvasPage from "./canvasPage";
import HomePage from "./homePage";
import RoomsPage from "./RoomsPage";
import { LoginCallback, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import useAuth from '../users/useAuth';



const RouterManager = () => {
  const history = useHistory();
  // const [user, token] = useAuth();
  // console.log("rm-", user);   

  const oktaAuth = new OktaAuth({
    issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
    clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
    redirectUri: `${window.location.origin}/login/callback`,
  });



  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };
  return (

    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login/callback" component={LoginCallback} />
        <Route path="/rooms" component={RoomsPage} />
        <Route path="/canvasRoom" component={CanvasPage} />
      </Switch>
    </Security>
  );
};
export default withRouter(RouterManager);

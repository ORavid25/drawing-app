import { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

  const useAuth = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      if (!user) {
        oktaAuth.getUser().then(setUser);
      }
      setToken(`Bearer ${authState.accessToken.accessToken}`);
    } else {
      setUser(null);
      setToken(null);
    }
  }, [authState, user, oktaAuth]);

  return [user, token];
};
export default useAuth;

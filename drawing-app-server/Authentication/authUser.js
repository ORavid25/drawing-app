// const uuidv4 = require('uuid').v4;
const OktaJwtVerifier = require('@okta/jwt-verifier');
const okta = require('@okta/okta-sdk-nodejs');

const jwtVerifier = new OktaJwtVerifier({
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  issuer: process.env.JWT_ISSUER_OKTA,
});

const oktaClient = new okta.Client({
  orgUrl: process.env.REACT_APP_OKTA_ORG_URL,
  token: process.env.TOKEN_APP_OKTA_CLIENT,
});

const users = [];

const authHandler = async (socket, next) => {
  const { token = null } = socket.handshake.query || {};
  if (token) {
    try {
      const [authType, tokenValue] = token.trim().split(' ');
      if (authType !== 'Bearer') {
        throw new Error('Expected a Bearer token');
      }

      const { claims: { sub } } = await jwtVerifier.verifyAccessToken(tokenValue, 'api://default');
      const user = await oktaClient.getUser(sub);

      users.set(socket, {
        id: user.id,
        name: [user.profile.firstName, user.profile.lastName].filter(Boolean).join(' '),
      });
    } catch (error) {
      console.log(error);
    }
  }

  next();
}
module.exports = { authHandler };



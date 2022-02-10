// const uuidv4 = require('uuid').v4;
const OktaJwtVerifier = require('@okta/jwt-verifier');
const okta = require('@okta/okta-sdk-nodejs');

const jwtVerifier = new OktaJwtVerifier({
  clientId: '0oa3hi8kfkJglkCqT5d7',
  issuer: 'https://dev-25664134.okta.com/oauth2/default',
});

const oktaClient = new okta.Client({
  orgUrl: 'https://dev-25664134.okta.com',
  token: '00M_Mxss3MMt0TYu1T6hYh9G9Nc1DsuLoFeLKoe_Bc',
});

const users = [];

const authHandler= async (socket, next)=> {
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
module.exports ={authHandler};



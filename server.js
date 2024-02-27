import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Issuer, Strategy } from 'openid-client';
import { setRoutes } from './routes.js';

const store = new session.MemoryStore();

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(
  session({
    secret: process.env.SSO_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
  }),
);

app.use(express.urlencoded({ extended: false }));

const router = express.Router();

setRoutes(router);

app.use('/', router);

let keycloakClient; // Declare keycloakClient outside the function
let tokenset; // Declare tokenset outside the function

async function startServer() {
  const keycloakIssuer = await Issuer.discover(
    `${process.env.SSO_AUTH_SERVER_URL}/realms/${process.env.SSO_REALM}/.well-known/openid-configuration`,
  );

  keycloakClient = new keycloakIssuer.Client({
    client_id: process.env.SSO_CLIENT_ID,
    client_secret: process.env.SSO_CLIENT_SECRET,
    redirect_uris: ['http://localhost:3000/auth/callback'],
    response_types: ['code'],
  });

  tokenset = {}; // Initialize tokenset here

  passport.use(
    'oidc',
    new Strategy({ client: keycloakClient }, (tokenSet, userinfo, done) => {
      tokenset = tokenSet;
      return done(null, tokenSet.claims());
    }),
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/login', passport.authenticate('oidc'));
  app.get(
    '/auth/callback',
    passport.authenticate('oidc', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/');
    },
  );

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    const retUrl = `${process.env.SSO_AUTH_SERVER_URL}/realms/${
      process.env.SSO_REALM
    }/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(
      process.env.SSO_LOGOUT_REDIRECT_URI,
    )}&id_token_hint=${tokenset.id_token}`;
    res.redirect(retUrl);
  });

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

  app.listen(3000, function () {
    console.log('Listening at http://localhost:3000');
  });
}

startServer();

export { passport, keycloakClient, tokenset };

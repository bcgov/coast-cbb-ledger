// Import necessary modules
import express from 'express';
import path from 'path';
import session from 'express-session';
import passport from 'passport';
import { Issuer, Strategy } from 'openid-client';
import * as dotenv from 'dotenv';

// Import setRoutes function
import { setRoutes } from './routes.js';

// Create a session store
const store = new session.MemoryStore();

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware for parsing JSON requests
app.use(express.json());

// Middleware for session management
app.use(
  session({
    secret: process.env.SSO_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
    },
    store,
  }),
);

// Middleware for parsing URL-encoded requests
app.use(express.urlencoded({ extended: false }));

// Create an Express Router
const router = express.Router();

// Set up routes
setRoutes(router);

// Use the router for all routes
app.use('/', router);

// Discover the Keycloak issuer
const keycloakIssuer = await Issuer.discover(
  `${process.env.SSO_AUTH_SERVER_URL}/realms/${process.env.SSO_REALM}/.well-known/openid-configuration`,
);

// Create a Keycloak client
const keycloakClient = new keycloakIssuer.Client({
  client_id: process.env.SSO_CLIENT_ID,
  client_secret: process.env.SSO_CLIENT_SECRET,
  redirect_uris: ['http://localhost:3000/auth/callback'],
  response_types: ['code'],
});

// Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

let tokenset = {};

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

// Define a route for /home that renders the index.ejs file
app.get('/home', (req, res) => {
  res.render('index', { username: req.user.preferred_username });
});

// Define a route for the index page
app.get('/index', (req, res) => {
  res.render('index'); // Assuming index.ejs is in the views folder
});

// Define a route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// Define a route for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(3000, function () {
  console.log('Listening at http://localhost:3000');
});

// Export necessary modules
export { passport, keycloakClient, tokenset };
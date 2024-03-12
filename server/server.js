// server/server.js

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Keycloak = require('keycloak-connect');
const https = require('https');
const fs = require('fs');

const app = express();

// define keycloak variables based on .env 
const keycloak = new Keycloak({}, {
  realm: process.env.REACT_APP_SSO_REALM,
  'auth-server-url': process.env.REACT_APP_SSO_AUTH_SERVER_URL,
  'ssl-required': 'external',
  resource: process.env.REACT_APP_SSO_CLIENT_ID,
  'bearer-only': true,
});

app.use(cors()); // Enable CORS for all routes
app.use(keycloak.middleware());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/protected', keycloak.protect(), (req, res) => {
  res.send('This is a protected endpoint');
});

// HTTPS configuration
const options = {
  key: fs.readFileSync('./ssl/localhost.key'),
  cert: fs.readFileSync('./ssl/localhost.crt')
};

// run server on port 8080
app.use(cors());
https.createServer(options, app).listen(8080, () => {
  console.log('Server running on https://localhost:8080');
});

// v1
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// app.use(cors());

// app.use('/', (req, res) => {
//   axios.get('https://dev.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token')
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).send('An error occurred');
//     });
// });

// const port = 5000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// v2
// const express = require('express');
// const cors = require('cors');
// const Keycloak = require('keycloak-connect');
// const https = require('https');
// const fs = require('fs');


// const app = express();

// // define keycloak variables based on .env 
// const keycloak = new Keycloak({}, {
//   realm: process.env.REACT_APP_SSO_REALM,
//   'auth-server-url': process.env.REACT_APP_SSO_AUTH_SERVER_URL,
//   'ssl-required': 'external',
//   resource: process.env.REACT_APP_SSO_CLIENT_ID,
//   'bearer-only': true,
// });

// app.use(cors());
// app.use(keycloak.middleware());

// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

// app.get('/protected', keycloak.protect(), (req, res) => {
//   res.send('This is a protected endpoint');
// });

// // HTTPS configuration
// const options = {
//   key: fs.readFileSync('./ssl/localhost.key'),
//   cert: fs.readFileSync('./ssl/localhost.crt')
// };

// https.createServer(options, app).listen(3001, () => {
//   console.log('Server running on https://localhost:3001');
// });
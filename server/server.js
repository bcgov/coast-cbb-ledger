// server/server.js

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Keycloak = require('keycloak-connect');
const https = require('https');
const fs = require('fs');
const winston = require('winston');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define Keycloak variables based on .env
const keycloak = new Keycloak({}, {
  realm: process.env.REACT_APP_SSO_REALM,
  'auth-server-url': process.env.REACT_APP_SSO_AUTH_SERVER_URL,
  'ssl-required': 'external',
  resource: process.env.REACT_APP_SSO_CLIENT_ID,
  'bearer-only': true,
});

// HTTPS configuration
const options = {
  key: fs.readFileSync('./ssl/localhost.key'),
  cert: fs.readFileSync('./ssl/localhost.crt')
};

// Middleware
app.use(cors());
app.use(keycloak.middleware());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' }),
  ],
});

// Log middleware
const morgan = require('morgan');
app.use(morgan('combined', { stream: logger.stream }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/protected', keycloak.protect(), (req, res) => {
  res.send('This is a protected endpoint');
});

// Error handling
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

// Proxy middleware to resolve CORS error after authentication
app.use(
  '/auth',
  createProxyMiddleware({
    target: 'https://dev.loginproxy.gov.bc.ca',
    changeOrigin: true,
  })
);

// Start server
https.createServer(options, app).listen(8080, () => {
  console.log('Server running on https://localhost:8080');
});


////////////////////// DATABASE

const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DB,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Connected to database');
    console.log('Current database time:', res.rows[0].now);
  }
});

// Example route to fetch data from database
app.get('/api/users', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    const users = result.rows;
    client.release();
    res.json(users);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Close the pool when the application exits
process.on('exit', () => {
  pool.end();
});

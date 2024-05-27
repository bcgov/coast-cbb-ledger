// server/database.js

const { Pool } = require('pg');

require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const getTestEntries = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM entries'); // Change 'test_entries' to 'entries' if you've changed the table name
    client.release();
    return result.rows;
  } catch (error) {
    console.error('Error fetching test entries:', error);
    throw error;
  }
};

module.exports = {
  pool,
  getTestEntries,
};


// App.js

import express from 'express';
import { passport } from './server'; // Remove the .js extension

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// Define your routes here

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, function () {
  console.log('Server running on port 3000');
});

export default app;

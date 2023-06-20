// Import the needed modules.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const appRoutes = require('./routes/appRoutes');
const helmet = require('helmet');

// Attach .env variables to process object in Node.js.
require('dotenv').config();

// Create the express app.
const app = express();

// For security concerns.
app.use(helmet());

// Enable CORS. These options are needed for Chrome (not Firefox).
if (process.env.STATUS === 'dev') {
  app.use(
    cors({
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    })
  );
}
if (process.env.STATUS === 'prod') {
  app.use(
    cors({
      origin: process.env.FRONT_END_URL,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    })
  );
}

// Look if there are some data and attach to req object.
// Now I can get it with req.head for example.
app.use(express.json());

// Needed to use cookie in Express.js.
app.use(cookieParser());

// Get the routes from routes files that use express.Router() function.
app.use('/api/users', userRoutes);
app.use('/api/todos', appRoutes);

// Link MongoDB with mongoose.
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Be connected and then listen to request.
    app.listen(process.env.PORT);
  })
  .catch((error) => {
    console.log(error);
  });

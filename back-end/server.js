// Import the needed modules.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Attach .env variables to process object in Node.js.
require('dotenv').config();

// Create the express app.
const app = express();

// Enable CORS. These options are needed for Chrome (not Firefox).
// TODO: change "origin" option for production.
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  })
);

// Look if there are some data and attach to req object.
// Now I can get it with req.head for example.
app.use(express.json());

// Needed to use cookie in Express.js.
app.use(cookieParser());

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

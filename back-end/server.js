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

// Use this for secure: true (cookie).
if (process.env.NODE_ENV === 'prod') {
  app.set('trust proxy', 1);
}

// Needed for Chrome.
app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.options('*', cors());

// For security concerns.
app.use(helmet());

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

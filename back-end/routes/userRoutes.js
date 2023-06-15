// Import the needed modules.
const express = require('express');
const {
  createUser,
  loginUser,
  logoutUser,
} = require('../controllers/userControllers');

// Create the express router.
const router = express.Router();

// Controllers function POST to SEND the data.
router.post('/signup', createUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser);

module.exports = router;

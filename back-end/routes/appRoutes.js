// Import the needed modules.
const express = require('express');
const {
  getData,
  sendData,
  deleteData,
  patchData,
} = require('../controllers/appControllers');
const authMiddleware = require('../middlewares/authMiddleware');

// Create the express router.
const router = express.Router();

// If you don't have a token you can't make
// any data request to the server.
router.use(authMiddleware);

// Controllers function GET to GET the data.
router.get('/', getData);

// Controllers function POST to SEND the data.
router.post('/', sendData);

// Controllers function PATCH to PATCH the data.
router.patch('/:id', patchData);

// Controllers function DELETE to DELETE the data.
router.delete('/:id', deleteData);

module.exports = router;

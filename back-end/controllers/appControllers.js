const mongoose = require('mongoose');
const appModels = require('../models/appModels');
const jwt = require('jsonwebtoken');

const getData = async (req, res) => {
  try {
    // Get the user_ID string by decoding the cookie.
    const access_token = req.cookies.access_token;
    const decodedToken = jwt.verify(access_token, process.env.SECRET_KEY);
    const user_ID = decodedToken._id;

    // Verify if the data sent from the client matches the schema.
    const data = await appModels.find({ user_ID }).sort();

    // Return the data in json.
    res.status(200).json(data);
  } catch (error) {
    // Handle any error that occurs during the process.
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
};

const sendData = async (req, res) => {
  try {
    // Put the data sent by client in the body of the request object.
    const { content, isDone } = req.body;

    // It will create book with a user_ID value that
    // correspond to the _id value of the document in MongoDB
    // when the user created his account.
    const access_token = req.cookies.access_token;
    const decodedToken = jwt.verify(access_token, process.env.SECRET_KEY);
    const user_ID = await decodedToken._id;

    // Create the data only if its matches the models.
    const data = await appModels.create({
      user_ID,
      content,
      isDone,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such id' });
  }

  const data = await appModels.findOneAndDelete({ _id: id });

  if (!data) {
    return res.status(400).json({ error: 'No such todo' });
  }

  try {
    // Get the user_ID string by decoding the cookie.
    const access_token = req.cookies.access_token;
    const decodedToken = jwt.verify(access_token, process.env.SECRET_KEY);
    const user_ID = decodedToken._id;

    // Verify if the data sent from the client matches the schema.
    const data = await appModels.find({ user_ID }).sort();

    // Return the data in json.
    res.status(200).json(data);
  } catch (error) {
    // Handle any error that occurs during the process.
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
};

const patchData = async (req, res) => {
  const { id } = await req.params;
  const body = await req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404);
  }

  const updateTodo = await appModels.findOneAndUpdate({ _id: id }, body);

  if (!updateTodo) {
    return res.status(400);
  }

  try {
    // Get the user_ID string by decoding the cookie.
    const access_token = req.cookies.access_token;
    const decodedToken = jwt.verify(access_token, process.env.SECRET_KEY);
    const user_ID = decodedToken._id;

    // Verify if the data sent from the client matches the schema.
    const data = await appModels.find({ user_ID }).sort();

    // Return the data in json.
    res.status(200).json(data);
  } catch (error) {
    // Handle any error that occurs during the process.
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
};

module.exports = { getData, sendData, deleteData, patchData };

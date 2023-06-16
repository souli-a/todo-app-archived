const mongoose = require('mongoose');
const userModels = require('../models/userModels');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET_KEY, { expiresIn: '3d' });
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModels.createUser(email, password);
    res.status(201);
  } catch (error) {
    if (error.message === 'Email déjà utilisé') {
      res.status(400).json({ errorEmail: error.message });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModels.loginUser(email, password);
    const token = createToken(user._id);
    const expiryDate = new Date(Date.now() + 60 * 60 * 1000);
    res
      .cookie('access_token', token, {
        expires: expiryDate,
        sameSite: 'strict',
        // TODO: activate these options in production:
        /*  secure: true,
            httpOnly: true,
            domain: 'localhost',
            path: '/', */
      })
      .status(201)
      .send();
  } catch (error) {
    if (error.message === 'Email inexistant') {
      res.status(400).json({ errorEmail: error.message });
    }

    if (error.message === 'Mot de passe incorrect') {
      res.status(400).json({ errorPassword: error.message });
    }
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie('access_token').status(200).send();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, loginUser, logoutUser };

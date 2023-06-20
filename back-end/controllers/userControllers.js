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
    const token = createToken(user._id);
    const expiryDate = new Date(Date.now() + 60 * 60 * 1000);
    if (process.env.STATUS === 'dev') {
      res
        .cookie('access_token', token, {
          expires: expiryDate,
          sameSite: 'strict',
        })
        .status(201)
        .send();
    }
    if (process.env.STATUS === 'prod') {
      res
        .cookie('access_token', token, {
          expires: expiryDate,
          sameSite: 'strict',
          secure: true,
          httpOnly: true,
          domain: process.env.FRONT_END_URL,
          path: '/',
        })
        .status(201)
        .send();
    }
  } catch (error) {
    if (error.message === 'Email déjà utilisé') {
      res.status(409).json({ errorEmail: error.message });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModels.loginUser(email, password);
    const token = createToken(user._id);
    const expiryDate = new Date(Date.now() + 60 * 60 * 1000);
    if (process.env.STATUS === 'dev') {
      res
        .cookie('access_token', token, {
          expires: expiryDate,
          sameSite: 'strict',
        })
        .status(201)
        .send();
    }
    if (process.env.STATUS === 'prod') {
      res
        .cookie('access_token', token, {
          expires: expiryDate,
          sameSite: 'strict',
          secure: true,
          httpOnly: true,
          domain: process.env.FRONT_END_URL,
          path: '/',
        })
        .status(201)
        .send();
    }
  } catch (error) {
    if (error.message === 'Email inexistant') {
      res.status(404).json({ errorEmail: error.message });
    }

    if (error.message === 'Mot de passe incorrect') {
      res.status(401).json({ errorPassword: error.message });
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

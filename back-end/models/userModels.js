// MongoDB alone is schemaless, we need mongoose.
const mongoose = require('mongoose');

// To encrypt the password, we don't want to
// store the clear password in the DB.
const bcrypt = require('bcrypt');

// Create a Schema for the data sent from the client.
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    // 2 accounts with same the same email is forbidden.
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Use statics to bind functions on the model.
userSchema.statics.createUser = async function (email, password) {
  // Input validation on the front-end with zod.
  // ...

  // Verify if the email is already used.
  const doEmailExist = await this.findOne({ email });

  if (doEmailExist) {
    throw Error('Email déjà utilisé');
  }

  // Hash the password and return it.
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const userCredentials = await this.create({ email, password: hash });

  return userCredentials;
};

userSchema.statics.loginUser = async function (email, password) {
  // This will copy the whole document {_id, password, email, etc.}.
  // It find a document with the user input email.
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error('Email inexistant');
  }

  const doPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doPasswordMatch) {
    throw new Error('Mot de passe incorrect');
  }

  return user;
};

// "user" will be the name of the collection.
// "userSchema" will be the schema that need
// to matches the object sent from the client
// to be stored inside the collections as
// document in MongoDB.
module.exports = mongoose.model('user', userSchema);

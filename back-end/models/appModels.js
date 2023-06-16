// MongoDB alone is schemaless, we need mongoose.
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create a Schema for the data sent from the client.
const todoSchema = new Schema({
  user_ID: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
});

// "todo" will be the name of the collection.
// "todoSchema" will be the schema that need
// to matches the object sent from the client
// to be stored inside the collections as
// document in MongoDB.
module.exports = mongoose.model('todo', todoSchema);

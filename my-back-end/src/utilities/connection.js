const URL = `mongodb://localhost:27017/testDB`;
const { Schema } = require("mongoose");
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

let usersSchema = Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
});

connection = {};

connection.UsersConnection = async () => {
  try {
    const databaseConnection = await Mongoose.connect(URL, connectionOptions);
    const modal = await databaseConnection.model("users", usersSchema);
    console.log('in connection',modal);
    return modal;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;

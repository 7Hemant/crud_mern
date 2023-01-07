const mongoose = require("mongoose");

const ConnectedDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectedDB;

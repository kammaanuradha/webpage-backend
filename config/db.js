const mongoose = require("mongoose");

async function DbConnect() {
  try {
    let db = await mongoose.connect("mongodb://127.0.0.1:27017/anu", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return db;
  } catch (error) {
    console.log(error);
    return error
  }
}

module.exports = DbConnect;

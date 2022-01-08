const mongoose = require("mongoose");
module.exports = () => {
  try {
    console.log("database connected successfuly");
    return mongoose.connect(
      "mongodb+srv://bangalerinku:bangalerinku@cluster0.tslid.mongodb.net/tribe2?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("error from DB", err.message);
  }
};

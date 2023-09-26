require('dotenv').config();
const mongoose = require("mongoose");

const url = process.env.MONGO_URL;


const connectDB = () => {
  mongoose.connect(url).
  then(console.log("successfully connected")).
  catch(err=>console.log(err));
 
};
module.exports = connectDB;

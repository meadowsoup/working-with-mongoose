// import { MongoClient } from "mongodb";
// import dotenv from 'dotenv';

// dotenv.config();

// const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("sample_training");

// export default db;


const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = mongoose.connection;
const express = require("express");
const app = express();
const notes = require("./routes/notes");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use("/notes", notes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log("Server is connected and started listening"));
  } catch (err) {
    console.log(err);
  }
};

start();

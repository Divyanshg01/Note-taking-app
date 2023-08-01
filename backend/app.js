const express = require("express");
const app = express();
const notes = require("./routes/notes");

//middleware

app.use(express.json());

app.listen(3000, console.log("SERVER STARTED"));

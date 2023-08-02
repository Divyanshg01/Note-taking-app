const mongoose = require("mongoose");

const NotesSchemma = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide a title"],
    trim: true,
    maxlength: [50, "name can not be more than 50"],
  },
  description: {
    type: String,
    required: [true, "Must include the notes"],
    trim: true,
    maxlength: [500, "can not exceed 500"],
  },
});

module.exports = mongoose.model("NOTE", NotesSchemma);

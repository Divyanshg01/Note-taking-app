const NOTE = require("../Models/Notes");

const getAllNotes = async (req, res) => {
  // res.send("Hey there");
  try {
    const notes = await NOTE.find({});
    res.status(201).json({ notes });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNote = async (req, res) => {
  try {
    // res.send("post req");
    const notes = await NOTE.create(req.body);
    res.status(201).json({ notes });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getNote = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const notes = await NOTE.findOne({ _id: noteID });
    res.status(201).json({ notes });
    if (!notes) {
      return res.status(404).json({ msg: "not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const notes = await NOTE.findOneAndUpdate({ _id: noteID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!notes) {
      return res.status(404).json({ msg: "not found" });
    }
    res.status(201).json({ notes });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const notes = await NOTE.findOneAndDelete({ _id: noteID });

    if (!notes) {
      return res.status(404).json({ msg: "not found" });
    }
    res.status(201).json({ notes });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
};

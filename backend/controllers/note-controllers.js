const NOTE = require("../Models/Notes");

const getAllNotes = async (req, res) => {
  // res.send("Hey there");
  try {
    const note = await NOTE.find({});
    res.status(201).json({ note });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


const createNote = async (req, res) => {
  try {
    // res.send("post req");
    const note = await NOTE.create(req.body);
    res.status(201).json({ note });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getNote = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await NOTE.findOne({ _id: noteID });
    res.status(201).json({ note });
    if (!note) {
      return res.status(404).json({ msg: "not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await NOTE.findOneAndUpdate({ _id: noteID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!note) {
      return res.status(404).json({ msg: "not found" });
    }
    res.status(201).json({ note });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await NOTE.findOneAndDelete({ _id: noteID });

    if (!note) {
      return res.status(404).json({ msg: "not found" });
    }
    res.status(201).json({ note });
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

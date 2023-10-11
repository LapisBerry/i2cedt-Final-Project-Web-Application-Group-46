import Vocabulary from "../models/vocabularyModels.js";

/** @type {import("express").RequestHandler} */
export const createVocabulary = async (req, res) => {
  try {
    const newVocabulary = new Vocabulary(req.body);
    await newVocabulary.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

/** @type {import("express").RequestHandler} */
export const getVocabularys = async (req, res) => {
  const vocabularys = await Vocabulary.find();

  res.status(200).json(vocabularys);
};

/** @type {import("express").RequestHandler} */
export const editVocabulary = async (req, res) => {
  try {
    const updated = await Vocabulary.findByIdAndUpdate(req.params.id, req.body);

    if (updated) {
      res.status(200).json({ message: "OK" });
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (err) {
    if (err.name === "CastError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

/** @type {import("express").RequestHandler} */
export const deleteVocabulary = async (req, res) => {
  try {
    const updated = await Vocabulary.findByIdAndDelete(req.params.id, req.body);

    if (updated) {
      res.status(200).json({ message: "OK" });
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (err) {
    if (err.name === "CastError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

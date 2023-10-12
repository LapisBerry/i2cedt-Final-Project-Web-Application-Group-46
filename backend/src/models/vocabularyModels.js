import mongoose from "mongoose";

const vocabularySchema = new mongoose.Schema({
  vocabulary: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
});

var Vocabulary = mongoose.model("Vocabulary", vocabularySchema);

export default Vocabulary;

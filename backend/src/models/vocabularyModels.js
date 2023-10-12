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

// To exclude the __v field from query results, use the select option:
vocabularySchema.set('toJSON', { versionKey: false });

var Vocabulary = mongoose.model("Vocabulary", vocabularySchema);

export default Vocabulary;

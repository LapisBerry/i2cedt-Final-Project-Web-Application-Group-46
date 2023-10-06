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

const Item = mongoose.model("Item", vocabularySchema);

export default Item;

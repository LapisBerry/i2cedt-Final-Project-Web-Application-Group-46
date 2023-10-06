# FrontEnd Section

Schema ที่เราจะเก็บใน mongodb
```
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
```

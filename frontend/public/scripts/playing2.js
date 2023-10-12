import mongoose from "mongoose";

const mongodbUrl = 'mongodb+srv://Marcus:19188mangoos@cluster0.douquax.mongodb.net/?retryWrites=true&w=majority';
const databaseName = 'test';
const collectionName = 'vocabularies';

mongoose.connect(`${mongodbUrl}/${databaseName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const vocabularySchema = mongoose.model(collectionName, new mongoose.Schema({
  vocabulary: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
}));

async function fetchData() {
  try {
    const data = await vocabularySchema.find({ /* Your query here */ }).exec();
    console.log('Fetched data:');
    return data;
  } catch (err) {
    console.error('Error:', err);
  }
}

export async function randomizer1() {
  const data = await fetchData();
  if (data) {
    const selection = data[Math.floor(Math.random() * data.length)];
    for (var key in selection) {
      // Replace with appropriate DOM manipulation logic
      console.log(key + ': ' + selection[key]);
    }
  }
}

export async function randomizer2() {
    const data = await fetchData();
    if (data) {
      const selection = data[Math.floor(Math.random() * data.length)];
      for (var key in selection) {
        // Replace with appropriate DOM manipulation logic
        console.log(key + ': ' + selection[key]);
      }
    }
}

export async function randomizer3() {
    const data = await fetchData();
    if (data) {
      const selection = data[Math.floor(Math.random() * data.length)];
      for (var key in selection) {
        // Replace with appropriate DOM manipulation logic
        console.log(key + ': ' + selection[key]);
      }
    }
}

export async function randomizer4() {
    const data = await fetchData();
    if (data) {
      const selection = data[Math.floor(Math.random() * data.length)];
      for (var key in selection) {
        // Replace with appropriate DOM manipulation logic
        console.log(key + ': ' + selection[key]);
      }
    }
}

// Call fetchData and then the randomizer functions
fetchData()
  .then(() => {
    randomizer1();
    randomizer2();
    randomizer3();
    randomizer4();
  });
  
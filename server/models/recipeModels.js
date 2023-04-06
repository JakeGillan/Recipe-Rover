const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost/SoloDolo';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'recipes'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
  },
    ingredients: {
        type: String,
        required: true
  },
    course: String,
    instructions: {
        type: String,
        required: true
  },
    url: String,
});

const Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe; 
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost/SoloDolo';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'blogs'
})
  .then(() => console.log('Connected to Mongo DB Blogs.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name: {
        type: String,
        required: true
  },
    url: String,
});

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog; 
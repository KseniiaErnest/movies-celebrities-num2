const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebrityNewSchema = new Schema({
  name: String,
  occupation: String,
  image: String
  // movies: [{type: mongoose.Types.ObjectId, ref: 'Movie'}]
})

const CelebrityVer2 = mongoose.model('CelebrityVer2', celebrityNewSchema);

module.exports = CelebrityVer2;

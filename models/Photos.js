const mongoose = require('../db/connection');

const PhotosSchema = new mongoose.Schema({
    image: String,
    owner: String,
    description: String,
})

const Photos = mongoose.model('Photos', PhotosSchema);

module.exports = Photos;
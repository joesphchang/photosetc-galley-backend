const mongoose = require('../db/connection');

const PhotosScheme = new mongoose.Scheme({

})

const Photos = mongoose.model('Photos', PhotosSchema);

module.exports = Photos;
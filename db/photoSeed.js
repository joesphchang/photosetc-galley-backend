const Photos = require('../models/Photos');
const photosSeeds = require('./photoList.json');

// Logic
Photos.deleteMany({})
	.then(() => {
		console.log('Deleted all my photos!');
		return photosSeeds.map((photos) => {
			return { ...photos };
		});
	})
	.then((photos) => {
		return Photos.insertMany(photos);
	})
	.then((newPhotos) => {
		console.log('Created a new photo!', newPhotos);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});

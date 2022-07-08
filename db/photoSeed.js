const Photos = require('../controller/photosController');
const photosSeeds = require('./photoList.json');

// Logic
Photos.deleteMany({})
	.then(() => {
		console.log('Deleted all my street photos!');
		return photosSeeds.map((photos) => {
			return { ...photos };
		});
	})
	.then((photos) => {
		return Photos.insertMany(photos);
	})
	.then((newPhotos) => {
		console.log('Created a new street photo!', newPhotos);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});

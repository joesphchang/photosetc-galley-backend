const express = require('express');

const router = express.Router();

const Photos= require('../models/Photos');

// Getting all portfolio
router.get('/', async (req, res, next) => {
	try {
		const photos = await Photos.find({});
		res.json(photos);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const photos = await Photos.findById(req.params.id);
		res.json(photos);
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newPhoto = await Photos.create(req.body);
		res.json(newPhotos);
	} catch (error) {
		next(error);
	}
});

module.exports = router;

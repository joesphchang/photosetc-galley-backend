const express = require('express');
const cors = require('cors');
const app = express();
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/portfolios');
});

/* START CONTROLLERS HERE */
const photosController = require('./controllers/portfoliosController');

// direct all requests to '/api/bookmarks' to the bookmarks controller
app.use('/api/portfolios', portfoliosController);
app.use('/api/projects', projectsController);
app.use('/api/streetphotos', streetPhotosController);

/* END CONTROLLERS HERE */
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});

// START SERVER
app.listen(app.get('port'), () => {
	console.log(`🍀 PORT: ${app.get('port')} 🌞`);
});

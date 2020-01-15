const { Router } = require('express');
const routes = Router();

const DevController = require('./app/controllers/DevController');

routes.post('/dev/add', DevController.store);

module.exports = routes;
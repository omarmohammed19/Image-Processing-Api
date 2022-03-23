import express from 'express';
import image from './api/imageprocessing';

const routes = express.Router();

routes.use('/imageprocessing', image);

export default routes;
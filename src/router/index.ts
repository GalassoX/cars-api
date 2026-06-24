import { Router } from 'express';
import carsRouter from './car.router.js';

const router: Router = Router();

router.use('/api/cars', carsRouter);

export default router;
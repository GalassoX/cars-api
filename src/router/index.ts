import { Router } from 'express';
import carsRouter from './car.router.js';

const router: Router = Router();

router.use('/cars', carsRouter);

export default router;
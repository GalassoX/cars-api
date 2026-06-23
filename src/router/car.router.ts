import { Router } from 'express';
import { getCars } from '../controller/car.controller.js';

const router: Router = Router();

router.get('/find', getCars);

// const suggestVehicleSchema = z.object({
//   make: z.string(),
//   model: z.string(),
//   type: z.string(),
//   origin: z.string(),
//   drivetrain: z.string(),
//   msrp: z.string(),
//   invoice: z.string(),
//   engine_size: z.string(),
//   cylinders: z.string(),
//   horsepower: z.string(),
//   mpg_city: z.string(),
//   mpg_highway: z.string(),
//   weight: z.string(),
//   wheelbase: z.string(),
//   length: z.string()
// });

export default router;
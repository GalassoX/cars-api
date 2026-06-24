import { Router } from 'express';
import { getCars } from '../controller/car.controller.js';

const carRouter: Router = Router();

/**
 * @openapi
 * /api/cars/find:
 *   get:
 *     summary: Obtiene los vehiculos
 *     parameters:
 *        - in: query
 *          name: make
 *          schema: 
 *            type: string
 *        - in: query
 *          name: model
 *          schema: 
 *            type: string
 *        - in: query
 *          name: type
 *          schema: 
 *            type: string
 *        - in: query
 *          name: origin
 *          schema: 
 *            type: string
 *        - in: query
 *          name: drivetrain
 *          schema: 
 *            type: string
 *        - in: query
 *          name: msrp
 *          schema: 
 *            type: string
 *        - in: query
 *          name: invoice
 *          schema: 
 *            type: string
 *        - in: query
 *          name: engine_size
 *          schema: 
 *            type: string
 *        - in: query
 *          name: cylinders
 *          schema: 
 *            type: string
 *        - in: query
 *          name: horsepower
 *          schema: 
 *            type: string
 *        - in: query
 *          name: mpg_city
 *          schema: 
 *            type: string
 *        - in: query
 *          name: mpg_highway
 *          schema: 
 *            type: string
 *        - in: query
 *          name: weight
 *          schema: 
 *            type: string
 *        - in: query
 *          name: wheelbase
 *          schema: 
 *            type: string
 *        - in: query
 *          name: length
 *          schema: 
 *            type: string
 *     tags:
 *       - Cars
 *     responses:
 *       200:
 *         description: List of cars
 */
carRouter.get('/find', getCars);

export default carRouter;
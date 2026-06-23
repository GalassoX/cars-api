import type { Request, Response } from "express";
import { findCar } from "../repository/car.repository.js";
import { createSuccessResponse } from "../lib/responseUtil.js";
import { HttpStatus } from "../lib/constants.js";

export async function getCars(req: Request, res: Response): Promise<void> {
  const query = req.query;
  
  const result = await findCar(query, false);

  createSuccessResponse(res, {
    statusCode: HttpStatus.Ok,
    data: result.map(({ is_suggestion, ...car }) => car),
  });
}
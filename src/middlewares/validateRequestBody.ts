import type z from "zod";
import type { NextFunction, Request, Response } from "express";
import { createErrorResponse } from "../lib/responseUtil.js";
import { ERROR_MESSAGES } from "../lib/constants.js";

export function validateRequestBodyKeys(zSchema: z.ZodObject<any>): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = zSchema.safeParse(req.body);
    
    if (result.success) {
      next();
    } else {
      createErrorResponse(res, {
        error: ERROR_MESSAGES.INVALID_REQUEST_BODY
      });
    }
  }
}
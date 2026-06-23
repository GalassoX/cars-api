import type { NextFunction, Request, Response } from "express";
import { createErrorResponse } from "../lib/responseUtil.js";
import { ERROR_MESSAGES } from "../lib/constants.js";
import { BusinessError } from "../lib/errors/businessError.js";

export function handleExceptions(err: Error, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof BusinessError) {
    createErrorResponse(res, {
      statusCode: err.statusCode,
      error: err.error
    });
    return;
  }
  createErrorResponse(res, {
    error: ERROR_MESSAGES.GENERIC_ERROR
  });
}
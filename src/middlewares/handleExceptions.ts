import type { NextFunction, Request, Response } from "express";
import { createErrorResponse } from "../lib/responseUtil.js";
import { ERROR_MESSAGES } from "../lib/constants.js";

export function handleExceptions(err: Error, req: Request, res: Response, next: NextFunction): void {
  createErrorResponse(res, {
    error: ERROR_MESSAGES.GENERIC_ERROR
  });
}
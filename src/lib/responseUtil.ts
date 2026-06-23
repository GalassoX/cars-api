import type { Response } from "express";
import type { APIResponse, ErrorAPIResponse } from "../types.js";
import { HttpStatus } from "./constants.js";

export function createSuccessResponse<T>(res: Response, data: APIResponse<T>): Response {
  return res.status(data.statusCode || HttpStatus.Ok).json({
    success: true,
    code: 0,
    data: data.data || {},
  });
}

export function createErrorResponse(res: Response, error: ErrorAPIResponse): Response {
  return res.status(error.statusCode || HttpStatus.BadRequest).json({
    success: false,
    error: error.error,
  });
}
import type { NextFunction, Request, Response } from "express";

export function logExceptions(err: Error, req: Request, res: Response, next: NextFunction): void {
  console.log({ 
    name: err.name,
    cause: err.cause,
    stack: err.stack
  });
  next(err);
}
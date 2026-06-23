import type { HttpStatus } from "../constants.js";

export class BusinessError extends Error {
  constructor(public statusCode: HttpStatus, public error: { code: number, message: string; }) {
    super(error.message);
    this.name = BusinessError.name;
    this.cause = error;
  }
}
import type { HttpStatus } from "../constants.js";

export class TechnicalError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = TechnicalError.name;
    this.cause = message;
  }
}
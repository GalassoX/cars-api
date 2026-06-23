import { ENV_VARS } from "./environment.js";

export const PORT = process.env.PORT || 3000;

export const CSV_FILE_PATH = 'cars.csv';

export const DB_CONFIG = {
  url: ENV_VARS.TURSO_DATABASE_URL,
  authToken: ENV_VARS.TURSO_AUTH_TOKEN
}

export const ERROR_MESSAGES = {
  GENERIC_ERROR: {
    code: 1000,
    message: 'Internal server error has ocurred'
  },
  ROUTE_NOT_FOUND: {
    code: 1001,
    message: 'Route not found'
  },
  INVALID_REQUEST_BODY: {
    code: 1002,
    message: 'Invalid request body'
  }
}

export enum HttpStatus {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500
}
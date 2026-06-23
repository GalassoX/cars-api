export const PORT = process.env.PORT || 3000;

export const CSV_FILE_PATH = 'cars.csv';

export const DB_CONFIG = {
  url: process.env.TURSO_DB_TURSO_DATABASE_URL || '',
  authToken: process.env.TURSO_DB_TURSO_AUTH_TOKEN || ''
}

export const ERROR_MESSAGES = {
  GENERIC_ERROR: {
    code: 1000,
    message: 'Internal server error has ocurred'
  },
  INVALID_REQUEST_BODY: {
    code: 1001,
    message: 'Internal server error has ocurred'
  }
}

export enum HttpStatus {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  InternalServerError = 500
}
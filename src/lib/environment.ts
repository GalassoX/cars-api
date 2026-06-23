import { TechnicalError } from "./errors/technicalError.js";

function getEnvVar(key: string, defaultValue?: string): string {
  const envVar = process.env[key];
  if (!envVar) {
    if (defaultValue) {
      return defaultValue;
    } else {
      throw new TechnicalError(`Environment variable "${key}" not found!`);
    }
  }
  return envVar;
}

export const ENV_VARS = {
  TURSO_AUTH_TOKEN: getEnvVar('TURSO_DB_TURSO_AUTH_TOKEN'),
  TURSO_DATABASE_URL: getEnvVar('TURSO_DB_TURSO_DATABASE_URL')
}
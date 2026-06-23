import { Kysely } from "kysely";
import { DB_CONFIG } from "../lib/constants.js";
import { LibsqlDialect } from "@libsql/kysely-libsql";
import type { Database } from "./types.js";

const dialect = new LibsqlDialect({
  url: DB_CONFIG.url,
  authToken: DB_CONFIG.authToken
});

export const db = new Kysely<Database>({
  dialect
});
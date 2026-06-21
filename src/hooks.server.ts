import { Pool } from "pg";
import { getDb } from "./data/db";

export async function handle({ event, resolve }) {
  const pool = new Pool({
    connectionString: event.platform!.env.HYPERDRIVE.connectionString,
  });
  const db = getDb(pool);

  if (event.url.pathname.includes("/.well-known/appspecific/com.chrome.devtools")) {
    return new Response(null, { status: 204 }); // Return empty response with 204 No Content
  }

  event.locals.db = db;

  const response = await resolve(event);
  return response;
}

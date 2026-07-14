import type { PageServerLoad } from "./$types";
import { user, books as booksTable } from "$drizzle/schema";
import { eq } from "drizzle-orm";

export const load: PageServerLoad = async ({ platform, locals }) => {
  const books = await locals.db.select().from(booksTable).where(eq(booksTable.userId, "106394015208813116232")).limit(10);
  return { books };
};

import { getRequestEvent, query } from "$app/server";
import { books as booksTable } from "$drizzle/schema";
import { eq } from "drizzle-orm";

export const getPosts = query(async () => {
  const evt = getRequestEvent();
  const books = await evt.locals.db.select().from(booksTable).where(eq(booksTable.userId, "106394015208813116232")).limit(5);

  return books;
});

export const getBooks = query(async () => {
  const evt = getRequestEvent();
  const books = await evt.locals.db.select().from(booksTable).where(eq(booksTable.userId, "106394015208813116232")).limit(5);

  return books;
});

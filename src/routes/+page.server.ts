import type { PageServerLoad } from "./$types";
import { user, books as booksTable } from "$drizzle/schema";
import { eq } from "drizzle-orm";

export const load: PageServerLoad = async ({ platform, locals }) => {
  return {};
};

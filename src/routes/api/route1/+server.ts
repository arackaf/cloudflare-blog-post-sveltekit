import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ platform }) => {
  return new Response(JSON.stringify({ value: platform?.env.SECRET_1 }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

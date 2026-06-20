import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ platform, locals }) => {
  return {
    value: platform?.env.SECRET_1,
  };
};

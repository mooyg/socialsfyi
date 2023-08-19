import { getUserFromCookie } from "$lib";
import { error } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
  const user = await getUserFromCookie(cookies.get("socialsfyi-sid"));
  if (!user) {
    throw error(403);
  }
  return {
    user,
  };
};

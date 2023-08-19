import { getUserFromCookie } from "$lib";
import { error, redirect } from "@sveltejs/kit";

export const load = async ({ cookies, parent }) => {
  const user = await getUserFromCookie(cookies.get("socialsfyi-sid"));
  if (!user) {
    throw redirect(307, "/");
  }
  return {
    user,
  };
};

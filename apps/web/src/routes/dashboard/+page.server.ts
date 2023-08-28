import { getUserFromCookie, getUserWithProfile } from "$lib";
import { error, redirect } from "@sveltejs/kit";

export const load = async ({ cookies, parent }) => {
  const user = await getUserWithProfile(cookies.get("socialsfyi-sid"));
  if (!user) {
    throw redirect(307, "/");
  }
  return {
    userWithProfile: user,
    user: user,
  };
};

import { getUserFromCookie, getUserWithProfile } from "$lib";

import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies, parent }) => {
  const userWithProfile = await getUserWithProfile(
    cookies.get("socialsfyi-sid"),
  );

  if (!userWithProfile) {
    throw redirect(307, "/");
  }

  return {
    userWithProfile,
  };
};

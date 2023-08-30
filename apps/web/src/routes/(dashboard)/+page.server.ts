import { getUserFromCookie } from "$lib";

export const load = async ({ cookies }) => {
  const user = await getUserFromCookie(cookies.get("socialsfyi-sid"));
  return {
    user,
  };
};

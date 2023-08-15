import { SERVER_URL } from "$lib/constants.js";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const cookie = cookies.get("socialsfyi-sid");
  console.log(cookie);
  if (!cookie) {
    return {
      user: null,
    };
  }
  const res = await fetch(`${SERVER_URL}/api/user/me`, {
    method: "GET",
    headers: {
      Cookie: `socialsfyi-sid=${cookie};`,
    },
  });
  const user = await res.json();
  return {
    user,
  };
};

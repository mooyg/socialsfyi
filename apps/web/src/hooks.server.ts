import { SERVER_URL } from "$lib/constants";
import type { Handle } from "@sveltejs/kit";

export const handle = async ({ event, resolve }) => {
  const cookie = event.cookies.get("socialsfyi-sid");
  if (!cookie) {
    event.locals.user = null;
    return resolve(event);
  }

  const res = await fetch(`${SERVER_URL}/api/user/me`, {
    method: "GET",
    headers: {
      Cookie: `socialsfyi-sid=${cookie};`,
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    event.locals.user = null;
    return resolve(event);
  }
  const user = await res.json();
  event.locals.user = user;
  return resolve(event);
};

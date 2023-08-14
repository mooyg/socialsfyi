import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  console.log(event.cookies.getAll());
  return resolve(event);
};

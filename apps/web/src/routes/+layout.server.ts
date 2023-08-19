export const load = async ({ locals }) => {
  return {
    user: locals.user,
    pathname: locals.pathname,
  };
};

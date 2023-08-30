import { getUserFromCookie, getUserWithProfile } from "$lib";
import type {
  SelectProfileWithSocialSchema,
  SelectUserSchema,
} from "@socialsfyi/drizzle";
import { error, redirect } from "@sveltejs/kit";

export const load = async ({ cookies, parent }) => {
  const userWithProfile: SelectUserSchema & {
    profile: SelectProfileWithSocialSchema;
  } = await getUserWithProfile(cookies.get("socialsfyi-sid"));

  if (!userWithProfile) {
    throw redirect(307, "/");
  }
  return {
    userWithProfile,
  };
};

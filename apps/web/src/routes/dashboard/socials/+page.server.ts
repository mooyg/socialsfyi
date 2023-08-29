import { getUserFromCookie, getUserWithProfile } from "$lib";
import type {
  SelectProfileWithSocialSchema,
  SelectUserSchema,
} from "@socialsfyi/drizzle";
import { error, redirect } from "@sveltejs/kit";

export const load = async ({ cookies, parent }) => {
  const userProfile: SelectProfileWithSocialSchema = await getUserWithProfile(
    cookies.get("socialsfyi-sid"),
  );
  const user: SelectUserSchema | null = await getUserFromCookie(
    cookies.get("socialsfyi-sid"),
  );

  if (!user) {
    throw redirect(307, "/");
  }
  return {
    userProfile,
    user,
  };
};

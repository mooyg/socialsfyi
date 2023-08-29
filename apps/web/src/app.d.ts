// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type {
  SelectProfileSchema,
  SelectProfileWithSocialSchema,
  SelectSocialsSchema,
  SelectUserSchema,
} from "@socialsfyi/drizzle";

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: {
        id: string;
        username: string;
        pfp: string | null;
        email: string;
        discordId: string;
        name: string;
      } | null;
    }
    interface PageData {
      user: SelectUserSchema | null;
      userProfile: SelectProfileWithSocialSchema;
    }
    // interface Platform {}
  }
}

export {};

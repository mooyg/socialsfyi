// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { SelectUserSchema } from "@socialsfyi/drizzle";

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
      pathname: string;
    }
    interface PageData {
      user: SelectUserSchema | null;
      pathname: string;
    }
    // interface Platform {}
  }
}

export {};

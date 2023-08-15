// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
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
      } | null;
    }
    interface PageData {
      user: {
        id: string;
        username: string;
        pfp: string | null;
        email: string;
        discordId: string;
      } | null;
    }
    // interface Platform {}
  }
}

export {};

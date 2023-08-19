import { Github, Instagram, Twitter, Youtube } from "lucide-svelte";
import Spotify from "./ui/social-icons/spotify.svelte";
import type { SelectUserSchema, Socials } from "@socialsfyi/drizzle";
import type { RequestEvent } from "@sveltejs/kit";
import { SERVER_URL } from "./constants";
// place files you want to import through the `$lib` alias in this folder.
type SocialsObj = { [key in Socials]: any };

export const socials: SocialsObj = {
  twitter: Twitter,
  youtube: Youtube,
  github: Github,
  instagram: Instagram,
  spotify: Spotify,
};

export const getUserFromCookie = async (
  cookie: string | undefined,
): Promise<SelectUserSchema | null> => {
  if (!cookie) {
    return null;
  }

  const res = await fetch(`${SERVER_URL}/api/user/me`, {
    method: "GET",
    headers: {
      Cookie: `socialsfyi-sid=${cookie};`,
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    return null;
  }

  const user = await res.json();
  return user;
};

export const capitaliseFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

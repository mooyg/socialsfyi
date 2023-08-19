import { Github, Instagram, Twitter, Youtube } from "lucide-svelte";
import Spotify from "./ui/social-icons/spotify.svelte";
import type { Socials } from "@socialsfyi/drizzle";

// place files you want to import through the `$lib` alias in this folder.
type SocialsObj = { [key in Socials]: any };

export const socials: SocialsObj = {
  twitter: Twitter,
  youtube: Youtube,
  github: Github,
  instagram: Instagram,
  spotify: Spotify,
};

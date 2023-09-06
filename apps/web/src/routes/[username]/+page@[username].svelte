<script lang="ts">
  import { page } from "$app/stores";
  import SocialIcons from "@rodneylab/svelte-social-icons/";
  import type { Socials } from "@socialsfyi/drizzle/dist/schema/socials";
  const user = $page.data.userWithProfile;
  const socials: {
    [key in Socials]?: string | null;
  } = Object.fromEntries(
    Object.entries($page.data.userWithProfile.profile.socials).filter(
      ([key, value]) => {
        if (key === "id" || key === "profileId") {
          return false;
        }
        return value !== null;
      },
    ),
  );
</script>

<div class="flex w-full justify-center absolute mt-32">
  <div class="p-10 rounded-lg h-fit flex items-center flex-col gap-2">
    <div
      class="md:w-40 md:h-40 h-32 w-32 bg-black rounded-full border-heading-primary border-2"
    ></div>
    <span>
      <h2 class="font-bold text-2xl text-center">{user.username}</h2>
      <p class="text-text-secondary text-sm text-center">{user.profile.bio}</p>
    </span>
    <div class="flex flex-row flex-wrap gap-1">
      {#each Object.entries(socials) as [social, url]}
        <a target="_blank" href={url}>
          <SocialIcons
            width={32}
            fgColor="#eeeeee"
            bgColor="#111111"
            network={social}
            alt={social}
          />
        </a>
      {/each}
    </div>
  </div>
</div>

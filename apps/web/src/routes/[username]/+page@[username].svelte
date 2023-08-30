<script lang="ts">
  import { page } from "$app/stores";
  import { socials } from "$lib";
  import SocialIcons from "@rodneylab/svelte-social-icons/";
  const user = $page.data.userWithProfile;
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
    <div class="grid grid-cols-5 gap-2">
      {#each Object.keys(socials) as social}
        <SocialIcons
          width={32}
          fgColor="#eeeeee"
          bgColor="#111111"
          network={social}
          alt={social}
        />
      {/each}
    </div>
  </div>
</div>

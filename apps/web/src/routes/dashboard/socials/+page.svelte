<script>
  import { page } from "$app/stores";
  import { capitaliseFirstLetter, socials } from "$lib";
  import Button from "$lib/ui/button/Button.svelte";
  import Input from "$lib/ui/input/Input.svelte";
  import SocialIcons from "@rodneylab/svelte-social-icons";
</script>

<div class="w-full max-w-xl flex flex-col gap-8 mt-5">
  <h2 class="font-bold text-xl">SOCIALS</h2>
  <div class="grid grid-cols-3 gap-4">
    {#each Object.keys(socials) as social}
      <div class="flex flex-col">
        <SocialIcons
          width={32}
          fgColor="#eeeeee"
          bgColor="#111111"
          network={social}
          alt={social}
        />
        <Input
          value={$page.data.userProfile.socials[social]}
          class="w-fit p-2 rounded-md placeholder:text-xs placeholder:font-bold text-xs text-text-primary"
          variant="outline"
          placeholder={capitaliseFirstLetter(social)}
        />
      </div>
    {/each}
  </div>
  <Button>Save Changes</Button>
</div>

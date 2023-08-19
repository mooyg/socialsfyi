<script lang="ts">
  import { page } from "$app/stores";
  import AvatarInput from "$lib/ui/AvatarInput.svelte";
  import BackgroundInput from "$lib/ui/BackgroundInput.svelte";
  import Button from "$lib/ui/button/Button.svelte";
  import Input from "$lib/ui/input/Input.svelte";
  import SocialTag from "$lib/ui/social-tag/SocialTag.svelte";
  import Textarea from "$lib/ui/textarea/Textarea.svelte";
  const user = $page.data.user;
</script>

<div class="w-full max-w-xl flex flex-col gap-8 mt-5">
  <div class="flex gap-4">
    <AvatarInput />
    <BackgroundInput />
  </div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    <h2 class="font-bold text-sm">Your username</h2>
    <Input variant="outline" value={user?.username} disabled={true} />
  </label>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    <h2 class="font-bold text-sm">Your bio</h2>

    <Textarea
      variant="outline"
      placeholder="Write something about yourself here"
    />
  </label>

  <div class="flex flex-col gap-3">
    <h2 class="font-bold text-sm">Your socials</h2>
    <div class="space-y-2 text-gray-400">
      <h2 class="text-xs font-bold">Currently Connected</h2>
      <div class="flex gap-2 flex-wrap">
        <SocialTag link="" socialType="twitter" />
        <SocialTag link="" socialType="github" />
        <SocialTag link="" socialType="youtube" />
        <SocialTag link="" socialType="instagram" />
        <SocialTag link="" socialType="spotify" />
      </div>
    </div>
  </div>
  <Button>Save Changes</Button>
</div>

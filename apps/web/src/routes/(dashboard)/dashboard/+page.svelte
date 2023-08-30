<script lang="ts">
  import { page } from "$app/stores";
  import { SERVER_URL } from "$lib/constants";
  import AvatarInput from "$lib/ui/AvatarInput.svelte";
  import BackgroundInput from "$lib/ui/BackgroundInput.svelte";
  import Button from "$lib/ui/button/Button.svelte";
  import Input from "$lib/ui/input/Input.svelte";
  import SocialTag from "$lib/ui/social-tag/SocialTag.svelte";
  import Textarea from "$lib/ui/textarea/Textarea.svelte";

  const userWithProfile = $page.data.userWithProfile;

  const dashboard = {
    bio: userWithProfile.profile.bio,
    avatarURL: userWithProfile.profile.avatarURL,
    backgroundURL: userWithProfile.profile.backgroundURL,
  };

  const handleSaveDashboard = () => {
    fetch(`${SERVER_URL}/api/profile/update/dashboard`, {
      method: "POST",
      body: JSON.stringify(dashboard),
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    });
  };
</script>

<div class="w-full max-w-xl flex flex-col gap-8 mt-5">
  <div class="gap-4 grid grid-cols-2">
    <AvatarInput bind:avatarURL={dashboard.avatarURL} />
    <BackgroundInput bind:backgroundURL={dashboard.backgroundURL} />
  </div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    <h2 class="font-bold text-sm">Your username</h2>
    <Input
      variant="outline"
      value={userWithProfile?.username}
      disabled={true}
    />
  </label>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    <h2 class="font-bold text-sm">Your bio</h2>
    <Textarea
      bind:value={dashboard.bio}
      variant="outline"
      class="text-sm"
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
  <Button on:click={handleSaveDashboard}>Save Changes</Button>
</div>

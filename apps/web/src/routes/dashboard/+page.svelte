<script lang="ts">
  import { page } from "$app/stores";
  import AvatarInput from "$lib/ui/AvatarInput.svelte";
  import BackgroundInput from "$lib/ui/BackgroundInput.svelte";
  import Input from "$lib/ui/input/Input.svelte";
  const user = $page.data.user;
</script>

<div class="h-full flex flex-col items-center p-4">
  <div class="w-full max-w-xl flex flex-col gap-4">
    <h2 class="font-bold text-text-primary text-sm">
      <span class="font-normal text-text-secondary">Dashboard /</span>
      {user?.username}
    </h2>
    <div class="flex gap-4">
      <AvatarInput />
      <BackgroundInput />
    </div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      <h2 class="font-bold text-sm">Your Username</h2>
      <Input value={user?.username} disabled={true} />
    </label>
  </div>
</div>

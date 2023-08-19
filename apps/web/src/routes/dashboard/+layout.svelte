<script lang="ts">
  import { page } from "$app/stores";
  console.log($page.url.pathname);
</script>

<div class="h-full flex flex-col items-center p-4 gap-1">
  <h2 class="font-bold text-text-primary text-sm">
    <span class="font-normal text-text-secondary">Dashboard /</span>
    mooy
  </h2>
  <div class="flex flex-row flex-wrap gap-2">
    <a class="text-sm text-text-secondary" href="/dashboard/socials">Socials</a>
    <a class="text-sm text-text-secondary" href="/dashboard/settings"
      >Settings</a
    >
  </div>
  <slot />
</div>

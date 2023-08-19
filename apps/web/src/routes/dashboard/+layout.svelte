<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/stores";

  let currentPathname: string = "Dashboard";
  afterNavigate((navigate) => {
    currentPathname = navigate.to?.url.pathname ?? "";
  });
</script>

<div class="h-full flex flex-col items-center p-4 gap-1">
  <h2 class="font-bold text-text-primary text-sm">
    <span class="font-normal text-text-secondary"
      >{currentPathname.toLowerCase()}/</span
    > mooy
  </h2>
  <div class="flex flex-row flex-wrap gap-2">
    {#if currentPathname === "/dashboard"}
      <a class="text-sm text-text-secondary" href="/dashboard/socials"
        >Socials</a
      >
    {:else}
      <a class="text-sm text-text-secondary" href="/dashboard">Dashboard</a>
    {/if}
    <a class="text-sm text-text-secondary" href="/dashboard/settings"
      >Settings</a
    >
  </div>
  <slot />
</div>

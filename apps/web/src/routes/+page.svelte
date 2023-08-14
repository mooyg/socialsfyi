<script lang="ts">
  import Button from "$lib/ui/button/Button.svelte";
  import { LockIcon, PersonStanding, VenetianMask } from "lucide-svelte";
</script>

<div class="h-full flex items-center mt-8 flex-col">
  <div class="flex flex-col place-items-center gap-4">
    <div class="text-center">
      <h1 class="font-bold text-7xl">
        Welcome to SOCIALS.<span class="text-heading-primary"> FYI </span>
      </h1>
      <p class="font-bold text-sm text-text-secondary">
        Providing everyone an identity on the internet.
      </p>
    </div>

    <h2 class="font-bold text-2xl">Let's start by creating your identity</h2>
    <div class="border p-4 rounded-lg flex gap-2">
      <VenetianMask />
      <h2 class="font-bold text-xl">Your Identity</h2>
    </div>
  </div>
</div>

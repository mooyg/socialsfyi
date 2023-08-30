<script lang="ts">
  import { VenetianMask } from "lucide-svelte";
</script>

<div class="h-full flex items-center mt-8 flex-col">
  <div class="flex flex-col place-items-center gap-4">
    <div class="text-center">
      <h1 class="font-bold text-5xl md:text-7xl">
        Welcome to SOCIALS.<span class="text-heading-primary"> FYI </span>
      </h1>
      <p class="font-bold text-xs md:text-sm text-text-secondary">
        Providing everyone an identity on the internet.
      </p>
    </div>

    <h2 class="font-bold md:text-2xl">Let's start by creating your identity</h2>
    <div class="border p-4 rounded-lg flex gap-2">
      <VenetianMask />
      <a class="font-bold text-xl" href="/dashboard">Your Identity</a>
    </div>
  </div>
</div>

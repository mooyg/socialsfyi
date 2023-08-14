<script lang="ts">
  import Button from "$lib/ui/button/Button.svelte";
</script>

<div class="h-full flex items-center mt-8 flex-col">
  <div class="flex flex-col place-items-center gap-4">
    <div class="text-center">
      <h1 class="font-bold text-6xl">
        Welcome to SOCIALS.<span class="text-heading-primary"> FYI </span>
      </h1>
      <p class="font-bold text-sm text-text-secondary">
        Providing everyone an identity on the internet.
      </p>
    </div>
    <div class="flex flex-row gap-2">
      <Button variant="outline" size="lg">
        <span>Sign Up</span>
      </Button>
      <Button variant="ghost" size="lg">
        <span>Learn More</span>
      </Button>
    </div>
    <div class="border p-2 rounded-md">
      <h2>Your Identity</h2>
    </div>
  </div>
</div>

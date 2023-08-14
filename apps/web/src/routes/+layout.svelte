<script>
  import "../app.css";
  import Button from "$lib/ui/button/Button.svelte";
  import { LogIn } from "lucide-svelte";
</script>

<div class="flex flex-col h-screen">
  <header
    class="flex items-center justify-between border-b-2 border-button-primary p-3"
  >
    <h2 class="font-bold text-2xl">
      SOCIALS.<span class="text-heading-primary"> FYI </span>
    </h2>
    <Button><LogIn size={16} /><span>Login</span></Button>
  </header>
  <slot />
</div>

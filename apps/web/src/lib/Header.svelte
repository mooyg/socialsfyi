<script>
  import { LogIn } from "lucide-svelte";
  import { SERVER_URL } from "./constants";
</script>

<header
  class="flex items-center justify-between border-b-2 border-button-primary p-3"
>
  <h2 class="font-bold text-2xl">
    SOCIALS.<span class="text-heading-primary"> FYI </span>
  </h2>
  <a
    class="inline-flex font-bold bg-button-primary rounded-lg justify-center items-center text-sm gap-2 hover:bg-opacity-75 transition-all delay-75 p-2"
    href={`${SERVER_URL}/api/auth/discord/signin`}
    ><LogIn size={16} /><span>Login</span></a
  >
</header>

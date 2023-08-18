<script lang="ts">
  import { LogIn, UserIcon } from "lucide-svelte";
  import Button from "./ui/button/Button.svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Modal from "./ui/modal/Modal.svelte";
  import { SERVER_URL } from "./constants";
  import { redirect } from "@sveltejs/kit";
  let showModal = false;

  let TAB: "register" | "login" = "login";

  const handleLogin = (e: any) => {
    const formData = new FormData(e.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    fetch(`${SERVER_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then(async (res) => {
      const data = await res.json();

      if (res.ok) {
        goto("/dashboard", {
          invalidateAll: true,
        });
      }
    });
  };
</script>

<header
  class="flex items-center justify-between border-b-2 border-button-primary p-3"
>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <h2 on:click={() => goto("/")} class="font-bold text-2xl cursor-pointer">
    SOCIALS.<span class="text-heading-primary"> FYI </span>
  </h2>
  {#if $page.data.user}
    <a
      href="/dashboard"
      class="inline-flex font-bold bg-button-primary rounded-lg justify-center items-center text-sm gap-2 hover:bg-opacity-75 transition-all delay-75 p-2 text-white"
      on:click={() => goto("/dashboard")}><UserIcon /></a
    >
  {:else}
    <Button on:click={() => (showModal = true)}
      ><LogIn size={16} /><span>Login</span></Button
    >
    <Modal bind:open={showModal}>
      <div
        class="p-6 px-10 bg-background-primary rounded-lg border flex flex-col gap-8"
      >
        <!-- TABS LIST -->
        <div class="w-full flex flex-row gap-1 bg-slate-700 p-2 rounded-lg">
          <Button
            class={TAB === "login"
              ? "w-full text-text-primary"
              : " text-text-primary"}
            on:click={() => (TAB = "login")}
            >Login
          </Button>
          <Button
            class={TAB === "register"
              ? "w-full text-text-primary"
              : "text-text-primary "}
            on:click={() => (TAB = "register")}>Register</Button
          >
        </div>
        {#if TAB === "login"}
          <div class="flex flex-col gap-1">
            <h2 class="font-bold text-white text-2xl">Login</h2>
            <p class="text-text-secondary text-xs font-bold">
              Get started by logging in with your account
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <form on:submit|preventDefault={handleLogin}>
              <label class="font-bold text-text-primary flex flex-col">
                Username
                <input
                  name="username"
                  type="text"
                  class=" rounded-lg p-2 text-black placeholder:text-xs"
                  placeholder="Enter your username"
                />
              </label>
              <label class="font-bold text-text-primary flex flex-col">
                Password
                <input
                  name="password"
                  type="password"
                  class=" rounded-lg p-2 text-black placeholder:text-xs"
                  placeholder="Enter your password"
                />
              </label>
              <Button formaction="?/login" class="text-text-primary w-full mt-2"
                >Log In</Button
              >
            </form>
          </div>
        {:else}
          <div class="flex flex-col gap-1">
            <h2 class="font-bold text-white text-2xl">Register</h2>
            <p class="text-text-secondary text-xs font-bold">
              Get started by registering and creating your account
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <form method="post" action="?/register">
              <label class="font-bold text-text-primary flex flex-col">
                Email
                <input
                  name="email"
                  type="email"
                  class=" rounded-lg p-2 text-black placeholder:text-xs"
                  placeholder="Enter your email"
                />
              </label>
              <label class="font-bold text-text-primary flex flex-col">
                Username
                <input
                  name="username"
                  type="text"
                  class=" rounded-lg p-2 text-black placeholder:text-xs"
                  placeholder="Enter your username"
                />
              </label>
              <label class="font-bold text-text-primary flex flex-col">
                Password
                <input
                  name="password"
                  type="password"
                  class=" rounded-lg p-2 text-black placeholder:text-xs"
                  placeholder="Enter your password"
                />
              </label>
              <Button
                formaction="?/register"
                class="text-text-primary w-full mt-2">Register</Button
              >
            </form>
          </div>{/if}
      </div>
    </Modal>
  {/if}
</header>

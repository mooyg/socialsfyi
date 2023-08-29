<script lang="ts">
  import { SERVER_URL } from "$lib/constants";
  import { notifications } from "$lib/stores/notification";
  import { DeleteIcon, GalleryThumbnails, TrashIcon } from "lucide-svelte";
  import Button from "./button/Button.svelte";

  let files: FileList;

  $: if (files) {
    console.log(files);
    if (files.length > 1) {
      notifications.error("Not allowed to upload more than one file");
    }

    const form = new FormData();
    form.append("file", files[0]);

    fetch(`${SERVER_URL}/api/upload`, {
      method: "POST",
      body: form,
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data: { url: string; filename: string }) => {
        backgroundURL = data.url;
      });
  }

  export let backgroundURL: string | null | undefined;
</script>

{#if backgroundURL}
  <div class="relative">
    <Button
      on:click={() => (backgroundURL = "")}
      class="absolute text-red-600 m-2 text-[10px] hover:none"
    >
      <TrashIcon size={16} />
      Remove
    </Button>
    <img
      loading="eager"
      src={backgroundURL}
      alt="avatar"
      class="rounded-md h-[300px] w-full"
    />
  </div>
{:else}
  <label for="background-input" class="flex flex-col gap-1">
    <h2 class="font-bold text-xs">Your Background</h2>
    <div
      class="bg-text-secondary p-4 rounded-xl flex flex-col items-center justify-center gap-2"
    >
      <GalleryThumbnails class="text-white" size={24} />
      <input
        accept="image/*"
        id="background-input"
        type="file"
        class="hidden"
        bind:files
      />
    </div>
  </label>
{/if}

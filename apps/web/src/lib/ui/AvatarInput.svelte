<script lang="ts">
  import { SERVER_URL } from "$lib/constants";
  import { User2Icon } from "lucide-svelte";

  let files: FileList;
  let avatarURL: string;

  $: if (files) {
    console.log(files);
  }
</script>

<label for="avatar-input" class="flex flex-col gap-1">
  <h2 class="font-bold text-xs">Your avatar</h2>
  <div class="bg-text-secondary p-4 rounded-xl flex justify-center">
    <User2Icon class="text-white" size={24} />
  </div>
  <input
    accept="image/*"
    id="avatar-input"
    type="file"
    class="hidden"
    bind:files
  />
</label>

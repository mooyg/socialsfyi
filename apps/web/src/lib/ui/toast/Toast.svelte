<script lang="ts">
  import { notifications } from "$lib/stores/notification";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import { twMerge } from "tailwind-merge";
</script>

<div class="fixed top-[10px] left-[50%] z-[9999] pointer-events-none">
  {#each $notifications as notification (notification.id)}
    <div
      class={twMerge(
        "flex mb-1 w-fit p-2 rounded-lg text-white font-semibold",
        notification.colorCode && `bg-[${notification.colorCode}]`,
      )}
      in:fly={{ y: 30 }}
      out:fly={{ y: -30 }}
      animate:flip
    >
      {notification.message}
    </div>
  {/each}
</div>

<script lang="ts">
  export let showModal: boolean;
  let dialog: HTMLDialogElement;

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  on:close={() => (showModal = false)}
  bind:this={dialog}
  on:click|self={() => dialog.close()}
  class="bg-inherit"
>
  <slot />
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }
</style>

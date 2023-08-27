<script lang="ts">
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import Toast from "$lib/ui/toast/Toast.svelte";
</script>

<div class="flex flex-col h-screen">
  <Header />
  <slot />
  <Toast />
</div>

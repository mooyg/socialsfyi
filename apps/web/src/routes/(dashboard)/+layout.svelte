<script>
  import "../../app.css";
  import Header from "$lib/Header.svelte";
  import Toast from "$lib/ui/toast/Toast.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <Toast />
  <slot />
</div>

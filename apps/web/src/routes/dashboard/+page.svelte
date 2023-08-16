<script lang="ts">
  import { page } from "$app/stores";
  const user = $page.data.user;
</script>

<div class="h-full flex justify-center items-center mt-8 flex-col">
  <div
    class="border rounded-lg grid auto-rows-fr place-items-center gap-5 w-[400px] p-2"
  >
    <h2 class="font-bold text-2xl">
      Your <span class="text-heading-primary"> Profile </span>
    </h2>
    <div class="grid auto-rows-fr gap-4 w-full">
      <label class="font-bold"
        >Your profile name
        <input
          type="text"
          class="outline-none caret-black py-2 px-2 rounded-lg text-black font-semibold w-full"
          value={user?.name}
          disabled={false}
        />
      </label>

      <label class="font-bold">
        Your email
        <input
          type="text"
          class="outline-none caret-black py-2 px-2 rounded-lg text-black font-semibold w-full"
        />
      </label>
    </div>
  </div>
</div>

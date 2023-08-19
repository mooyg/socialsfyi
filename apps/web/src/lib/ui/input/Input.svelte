<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  export const input = cva(
    "w-full p-2 outline-none placeholder:text-black caret-black rounded-xl text-black font-bold bg-white mt-1",
    {
      variants: {
        variant: {
          default: "",
          outline:
            "border bg-inherit border-gray-400 text-gray-400 font-medium  caret-white placeholder:text-text-secondary",
        },
      },
    },
  );
  export { className as class };
  interface $$Props extends HTMLInputAttributes, VariantProps<typeof input> {}
  export let variant: $$Props["variant"] = "default";
</script>

<input
  {...$$props}
  class={twMerge(
    input({
      className: $$props.class,
      variant,
    }),
  )}
/>

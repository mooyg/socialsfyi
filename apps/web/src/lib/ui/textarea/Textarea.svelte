<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import type { HTMLTextareaAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";

  const textarea = cva(
    "w-full p-2 outline-none placeholder:text-black caret-black rounded-xl text-black font-bold bg-white mt-1 placeholder:text-xs resize-none",
    {
      variants: {
        variant: {
          default: "",
          outline:
            "border bg-inherit border-gray-400 text-white font-medium caret-white placeholder:text-text-secondary",
        },
      },
    },
  );
  export { className as class };

  interface $$Props
    extends HTMLTextareaAttributes,
      VariantProps<typeof textarea> {
    value: string | null | undefined;
  }
  export let variant: $$Props["variant"] = "default";
  export let value: $$Props["value"] | null | undefined;
</script>

<textarea
  {...$$props}
  class={twMerge(
    textarea({
      class: $$props.class,
      variant,
    }),
  )}
  bind:value
/>

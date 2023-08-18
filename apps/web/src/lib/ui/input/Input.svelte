<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import { twMerge } from "tailwind-merge";

  export const input = cva(
    "w-full p-2 outline-none placeholder:text-black caret-black rounded-lg text-black font-bold bg-white mt-1",
    {
      variants: {
        variant: {
          default: "",
          outline: "border border-text-primary",
        },
      },
    },
  );
  export { className as class };
  interface $$Props extends HTMLInputElement, VariantProps<typeof input> {}
  export const variant: $$Props["variant"] = "default";
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

<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import { twMerge } from "tailwind-merge";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const button = cva(
    "inline-flex font-bold bg-button-primary rounded-lg justify-center items-center text-sm gap-2 hover:bg-opacity-75 transition-all delay-75",
    {
      variants: {
        variant: {
          default: "",
          outline: "border border-text-primary",
          ghost: "bg-transparent border border-text-primary",
        },
        size: {
          medium: "p-2",
          lg: "py-3 px-8 text-md",
        },
      },
    },
  );
  export { className as class };
  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {}

  export let size: $$Props["size"] = "medium";
  export let variant: $$Props["variant"] = "default";
</script>

<button
  {...$$props}
  class={twMerge(
    button({
      className: $$props.class,
      size,
      variant,
    }),
  )}
  on:click
>
  <slot />
</button>

<script lang="ts">
  import { socials } from "$lib";
  import type { Socials } from "@socialsfyi/drizzle";
  import { cva, type VariantProps } from "class-variance-authority";
  import { twMerge } from "tailwind-merge";

  const tag = cva(
    "w-fit text-[10px] font-bold p-1 bg-slate-800 rounded-lg max-w-[100px] line-clamp-3 flex gap-1 place-items-center text-white",
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
  interface $$Props extends VariantProps<typeof tag> {
    socialType: Socials;
    link: string;
  }
  export let socialType: Socials;
  export let variant: $$Props["variant"] = "default";
  export let link: string;
</script>

<a
  class={twMerge(
    tag({
      class: $$props.class,
      variant,
    }),
  )}
  href={link}
>
  <svelte:component this={socials[socialType]} class="h-4 w-4" />
  {socialType?.toLocaleUpperCase()}
</a>

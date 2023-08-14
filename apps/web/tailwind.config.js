/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#d5dbe4",
        },
        heading: {
          primary: "#8B728E",
        },
        background: {
          primary: "#030711",
        },
        button: {
          primary: "#1D283A",
        },
      },
    },
  },
  plugins: [],
};

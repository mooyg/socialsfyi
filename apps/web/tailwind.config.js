/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#d5dbe4",
          secondary: "#7E8DA2",
        },
        heading: {
          primary: "#8B728E",
        },
        background: {
          primary: "#030711",
        },
        button: {
          primary: "#0D1325",
        },
      },
    },
  },
  plugins: [],
};

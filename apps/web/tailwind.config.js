/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#D5DBE4",
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
        primary: {
          50: "#FFF5F2",
          100: "#FFF1EE",
          200: "#FFE4DE",
          300: "#FFD5CC",
          400: "#FFBCAD",
          500: "#FE795D",
          600: "#EF562F",
          700: "#EB4F27",
          800: "#CC4522",
          900: "#A5371B",
        },
        socials: {
          twitter: "#1D9BF0",
          github: "#181717",
          youtube: "#FF0000",
          instagram: "#E4405F",
          spotify: "#1DB954",
        },
      },
    },
  },
};

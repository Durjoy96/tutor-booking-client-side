import daisyui from "./node_modules/daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Open-Sans": ["Open Sans", "serif"],
      },
      colors: {
        "base-100": "#ffffff",
        "base-200": "#F5F6F9",
        "base-content": "#313140",
        "base-content-secondary": "#9C9CAC",
        primary: "#FF4438",
        "primary-content": "#ffffff",
      },
    },
  },
  plugins: [daisyui],
};

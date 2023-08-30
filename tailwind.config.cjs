/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#FDAB97",
                "primary-content": "#463064",
                light: "#e9decd",
                "light-content": "#d85011",
                dark: "#412e4b",
                "dark-content": "#f7fcc5",
                "light-alt": "#f6efac",
                "light-alt-content": "#6f76f4",
            },
            fontFamily: {
                sg: ["Space-Grotesk", "Gill Sans"],
            },
            backgroundImage: {
                grain: "url(/public/img/grain_bg.png)",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

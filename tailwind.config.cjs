/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#FDAB97",
                "primary-content": "#463064",
            },
            fontFamily: {
                oi: ["oi"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

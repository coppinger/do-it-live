/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                "transparent-blue": "rgba(50, 60, 81, 0.16)",
            },
            backgroundImage: {
                lines: "url('/images/line-bg.png')",
            },
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                glamour: ["Glamour", "serif"],
            },
            boxShadow: {
                button: "0px -3px 10.3px 0px #138d3f inset, 0px 2px 2px 0px #8affb4 inset, 0px 0px 56.8px 0px rgba(140, 218, 173, 0.46)",
                hover: "0px -3px 10.3px 0px #138d3f inset, 0px 2px 2px 0px #8affb4 inset, 0px 0px 100px 0px rgba(140, 218, 173, 0.46)",
            },
            animation: {
                "infinite-scroll": "infinite-scroll 5s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [],
};

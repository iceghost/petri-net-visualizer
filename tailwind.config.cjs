const config = {
    mode: "jit",
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        fontFamily: {
            body: ["latin_modern_sans10_regular", "sans-serif"],
        },
        extend: {
            borderWidth: {
                1.5: "1.5px",
            },
            strokeWidth: {
                1.5: "1.5px",
            },
        },
    },

    plugins: [],
};

module.exports = config;

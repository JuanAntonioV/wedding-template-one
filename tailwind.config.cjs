/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                sofia: ["Sofia", "sans-serif"],
                freebooster: ["Freebooster", "sans-serif"],
                atlane: ["Atlane", "sans-serif"],
                delycost: ["Delycost", "sans-serif"],
            },
            backgroundImage: {
                'heroImage': "url('/assets/img/hero.jpg')",
                'sectionImage': "url('/assets/img/section-one.jpg')",
            }
        },
        container: {
            center: true,
        }
    },
    plugins: [],
}

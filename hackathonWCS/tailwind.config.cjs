/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ocean-theme": "url('/src/assets/bg-footer.jpg')",
        "home-theme": "url('/src/assets/bg-home-section.jpg')",
        "cadre-detail": "url('/src/assets/cadre-img-detail.png')",
        "section-theme": "url('/src/assets/bg-section-to-page.webp')",
      },
      colors: {
        /* btn color */
        "btn-oasis-1": "#D78A6B",
        "btn-ocean-1": "#32AFB9",

        /* general color */
        "c-ocean": "#27C7D4",
        "c-oasis": "#FE9063",
        "c-creamy": "#FDF0E7",
      },
    },
  },
  plugins: [],
};

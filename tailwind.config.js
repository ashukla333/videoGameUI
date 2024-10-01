module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F6F6F6",
        "secondary-color": "#1d1e20",
        "card-background": " #0e1a2b",
        "text-color": " #c1d1e8",
        "input-bg": " #182c47",
        "button-accent": "#5692e8",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #081221, #03080f)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

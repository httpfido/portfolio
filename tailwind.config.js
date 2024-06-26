module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    duration: {
      400: "400ms",
    },
    extend: {},
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        dark: {
          primary: "#080703f6",
          secondary: "#1C1D24",
          tertiary: "#131419",
          accent: {
            DEFAULT: "#c2793c",
            hover: "#925a2b",
          },
          paragraph: "#878e99",
        },
        light: {
          primary: "#fffdfa",
          secondary: "#FEF9F1",
          tertiary: "#0d0c22",
          accent: {
            DEFAULT: "#0d0c22",
            hover: "#4b4a64",
          },
          paragraph: "grey",
          shadow: "#bab3a5",
        },
        // light: {
        //   primary: "#fffdf8",
        //   secondary: "#131014",
        //   tertiary: "#483c59",
        //   accent: {
        //     DEFAULT: "#0d0c22",
        //     hover: "#4b4a64",
        //   },
        //   paragraph: "#9198b1",
        // },
      },
    },
  },
  plugins: [],
};

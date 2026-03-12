export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F4F6F",
          dark: "#1E2F3F",
          light: "#3F6A8F",
        },
        accent: {
          DEFAULT: "#D4AF37",
          hover: "#C19B2E",
          soft: "#F5E6B2",
        },
        neutralBg: "#F4F7FA",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        xl: "24px",
        "2xl": "32px",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
        medium: "0 15px 35px rgba(0,0,0,0.12)",
      },
    },
  },
};
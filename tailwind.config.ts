import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cosmic: {
                    gold: "#C5A059", // Antique Bronze
                    brown: {
                        900: "#1C160F", // Deep Espresso (Darker/Richer than #2B1B17)
                        800: "#32221A",
                        700: "#4D362C",
                        600: "#6B4C3E",
                    },
                    cream: {
                        100: "#FDFBF7", // Cleaner Cream (Less yellow)
                        200: "#F5F2EA", // Subtle warmth
                        300: "#EBE5D9",
                    },
                },
            },
            fontFamily: {
                serif: ["var(--font-serif)", "serif"], // Bodoni Moda
                sans: ["var(--font-sans)", "sans-serif"], // Montserrat
            },
            backgroundImage: {
                "cream-gradient": "linear-gradient(180deg, #FEF9E1 0%, #FAF8F3 100%)",
                "gold-gradient": "linear-gradient(135deg, #BC9350 0%, #D4AF37 100%)",
                "dark-gradient": "linear-gradient(180deg, #2B1B17 0%, #3E2F2B 100%)",
            },
            backdropBlur: {
                xs: "2px",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-in",
                "slide-up": "slideUp 0.5s ease-out",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;

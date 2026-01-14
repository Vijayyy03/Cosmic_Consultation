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
                vastukalp: {
                    gold: "#BC9350",
                    brown: {
                        900: "#2B1B17",
                        800: "#3E2F2B",
                        700: "#524339",
                        600: "#6B564C",
                    },
                    cream: {
                        100: "#FEF9E1",
                        200: "#FAF8F3",
                        300: "#F5F0E5",
                    },
                },
            },
            fontFamily: {
                serif: ["var(--font-cinzel)", "serif"],
                sans: ["var(--font-lato)", "sans-serif"],
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

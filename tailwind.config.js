const { transform } = require( 'next/dist/build/swc' );

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'rotate-full': {

          '100%': {
            transform: 'translate(-50%, -50%) rotate(225deg)',

          },
        },
        shimmer: {
          // from: {
          //   transform: `translate(0, 0)`
          // },
          to: {
            transform: 'translate(100%,0) rotate(-45deg)'
          }
        },
        'spin-scale': {
          '0%, 100%': { transform: 'scale(0)', opacity: 0 },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: 1 },
        },
        beam: {
          from: { "backgroundPosition": "0% 0%" },
          to: { "backgroundPosition": " -150% 0" }
        }

      },
      animation: {
        'rotate-full': 'rotate-full 2.5s linear infinite',
        'spin-scale': 'spin-scale 2s ease-in-out',
        shimmer: "shimmer 3s linear forwards infinite",
        beam: "beam 4s linear forwards infinite",
      }
    },
  },
  plugins: [],
};

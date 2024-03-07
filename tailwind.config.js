/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|orange|yellow|green|teal|blue|indigo|purple|pink|gray|black|white|fuchsia|lime|emerald|cyan|sky|violet)-200/, // Match your background colors
    },
    {
      pattern: /text-(red|orange|yellow|green|teal|blue|indigo|purple|pink|gray|black|white|fuchsia|lime|emerald|cyan|sky|violet)-800/, // Match your text colors
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cc: {
          mint: '#00FFC3',
          ink: '#131A26',
          sand: '#F8F3E7',
          accent: '#2A5C2E'
        }
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};

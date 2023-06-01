/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear': 'linear-gradient(162deg, rgba(254,200,91,1) 16%, rgba(234,154,80,1) 32%, rgba(234,154,80,1) 93%, rgba(28,189,0,1) 100%)'
      },

      colors: {
        bgGreen: '#133E44',
        bgMilk: '#F2EEE5',
        bgDarkGrey: '#CCCCCC',
        specialYellow: '#FEC85B',
        specialLemon: '#D9EBD1',
        lightGreen: '#00966B',
        iconOrange: '#F49A50',
        iconBlue: '#1EB2BE',
        iconGreen: '#1CBD00',
        iconYellow: '#FEC85B',
        iconBg: '#124851',
        iconBg2: '#2B666C'
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}


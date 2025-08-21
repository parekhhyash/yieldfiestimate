/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'accent': '#ff5c00',
      },
      animation: {
        'tada': 'tada 1s ease-in-out',
        'slideIn': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        tada: {
          '0%': { 
            transform: 'scale(1) rotate(0deg)' 
          },
          '10%, 20%': { 
            transform: 'scale(0.9) rotate(-3deg)' 
          },
          '30%, 50%, 70%, 90%': { 
            transform: 'scale(1.1) rotate(3deg)' 
          },
          '40%, 60%, 80%': { 
            transform: 'scale(1.1) rotate(-3deg)' 
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)' 
          }
        },
        slideIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        }
      }
    },
  },
  plugins: [],
};
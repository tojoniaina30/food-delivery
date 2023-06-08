/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      '2xs': '10px',
      'xs': '11px',
      'sm': '12px',
      'tiny': '13px',
      'base': '14px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '60px',
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    colors: {
      primary: {
        light: '#FFF3ED',
        DEFAULT: '#FD6D22',
      },
      secondary: {
        light: '##F3F4FF',
        DEFAULT: '#4E60FF',
      }
    }
  },
  plugins: [

  ],
}


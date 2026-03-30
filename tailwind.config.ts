import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2D7A3A',
          'green-light': '#3D9A4D',
          'green-dark': '#1F5A2A',
          cream: '#FFF8F0',
          orange: '#E8722A',
          'orange-light': '#F08040',
          dark: '#1A1A1A',
          gray: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        button: '10px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.12)',
      },
      screens: {
        xs: '360px',
        sm: '414px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

export default config

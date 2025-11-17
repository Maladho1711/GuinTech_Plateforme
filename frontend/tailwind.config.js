/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: '#2563EB', // Bleu principal (plus doux)
          light: '#3B82F6', // Bleu clair
          accent: '#60A5FA', // Bleu accent
        },
        neutral: {
          light: '#F9FAFB', // Gris clair très doux
          white: '#FFFFFF', // Blanc
        },
        accent: {
          yellow: '#FBBF24', // Jaune/Orange pour accents
          yellowLight: '#FCD34D', // Jaune clair
        },
        success: '#10B981', // Vert menthe
        error: '#EF4444', // Rouge corail
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        button: '6px',
        card: '8px',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '32': '32px',
      },
    },
  },
  plugins: [],
}


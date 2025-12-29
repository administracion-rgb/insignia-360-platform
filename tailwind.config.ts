/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        darkBg: '#05070A', // El fondo profundo
        cardBg: '#0D1117', // Fondo de las tarjetas
        primaryPurple: '#5E5CE6', // El color del botón principal
        accentGreen: '#10B981', // El verde de "LIMPIO / ALTA"
        borderWhite: 'rgba(255, 255, 255, 0.1)', // Bordes sutiles
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% -20%, #2A2A5A 0%, #05070A 100%)',
      }
    },
  },
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        '5': '5px',
        '100': '100px',
      },
      fontFamily: {
        'nav-veil': 'Space Grotesk, sans-serif',
        'home_header': 'Inter,Roboto,sans-serif',
      },
      fontSize: {
        'nav-logo': 'calc(1.275rem + .3vw)',
      },
      colors: {
        'nav-text': '#FFFFFF',
        'nav-bg': 'rgba(22,22,28,.4)',
        'nav_hover': '#8671ff',
        'bt_bg': 'rgba(134,113,255,.8)',
        'home_text': '#8576da',
        'table-bg': 'rgba(22,22,28,1)',
      },
      backgroundImage: {
        // "gradient-to-t": "linear-gradient(0deg, #fff, #545759)",
        'gradient-home-main': 'linear-gradient(180deg, #16161c, #202029)',
      },
      keyframes: {
        moveUpDown: {
          "0%, 100%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(0)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotatePause: {
          "0%, 10%": { transform: "rotate(0deg)" }, // Start and stop briefly
          "50%": { transform: "rotate(360deg)" }, // Complete rotation
          "100%": { transform: "rotate(360deg)" }, // Hold position
        },
      },
      animation: {
        "move-up-down": "moveUpDown 3s ease-in-out infinite",
        rotate: "rotate 2s linear infinite",
        rotatePause: "rotatePause 3s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}


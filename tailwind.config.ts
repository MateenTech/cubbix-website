import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    inset: {
      '80%': '80%',
    },
    keyframes: {
      bounce: {
        "0%": {
          transform: "translateY(-10%)",
          animation_timing_func: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "100%": {
          transform: "translateY(-10%)",
          animation_timing_func: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          animation_timing_func: "cubic-bezier(0, 0, 0.2, 1)",
        }
      },
    },
    animation: {
      "illus-bounce": 'bounce 1s ease-in-out infinite',
    },
    plugins: [],
  },
}
export default config

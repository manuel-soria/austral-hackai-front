import type {Config} from 'tailwindcss'

export const colorConfig = {
  primary: {
    100: "#A1C9FF",
    200: "#6E9BFF",
    300: "#3B6EFF",
    400: "#2350FF",
    500: "#1D67FF",
    600: "#1950DB",
    700: "#143AAC",
  },
  secondary: {
    100: "#f8ccd7",
    200: "#FF7588",
    300: "#FF475B",
    400: "#FF3A52",
    500: "#FF2D48",
    600: "#FF1F3E",
    700: "#FF1134",
  },
  tertiary: {
    400: "#ffb32c33",
    500: "#FFB32C",
    700: "#704900"
  },
  error: {
    400: "#FFDCDC",
    500: "#FF6666",
    600: "#FF3333",
  },
  success: {
    400: "#D7F4E1",
    500: "#22BB33",
    600: "#1E9545",
  },
  info: {
    400: "#F2E2F7",
    500: "#D6A7E1",
    600: "#C27FD5",
  },
  warning: {
    400: "#FFE6B3",
    500: "#FFD180",
    600: "#FFB74D",
  },
  gray: {
    100: "#F9FAFB",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#B3B3B3",
    500: "#999999",
    600: "#808080",
    700: "#666666",
  },
  black: "#000000",
  green: {
    400: "#e6f4ef",
    500: "#40C379",
    600: "#0D582E"
  }
}

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'src/components/common/roundedImage.tsx'
  ],
  theme: {
    extend: {
      animationDelay: {
        '1': '0.2s',
        '2': '0.4s',
        '3': '0.6s',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: colorConfig,
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
export default config

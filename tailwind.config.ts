import type {Config} from 'tailwindcss'

const colorConfig = {
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
    100: "#FFAEBD",
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
    300: "#F3F4F6",
    400: "#B3B3B3",
    500: "#999999",
    600: "#808080",
    700: "#666666",
  },
}

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'src/components/roundedImage.tsx'
  ],
  theme: {
    extend: {
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
  plugins: [],
}
export default config

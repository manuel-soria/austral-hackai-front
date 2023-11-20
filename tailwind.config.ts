import type {Config} from 'tailwindcss'

const colorConfig = {
  primary: {
    300: "#ECECEC",
    400: "#D9D9D9",
    500: "#D1D1D1",
    600: "#9D9D9D",
    700: "#8B8B8B",
  },
  secondary: {
    400: "#F4F2EE",
    500: "#D3D1CC",
    600: "#AFAEAA",
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
    100: "#F2F2F2",
    200: "#E6E6E6",
    300: "#F3F4F6",
    400: "#B3B3B3",
    500: "#999999",
    600: "#808080",
    700: "#666666",
  },
  black: "#2D2D2D",
}

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
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

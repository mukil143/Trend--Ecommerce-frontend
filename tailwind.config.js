// tailwind.config.js (v4+ with ESM syntax)
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbar,
  ],
}

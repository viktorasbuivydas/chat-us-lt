/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'thread-dark': '#000000',
        'thread-gray': '#0A0A0A',
        'thread-border': '#1A1A1A',
        'thread-text': '#FFFFFF',
        'thread-primary': '#0066FF',
        'thread-primary-hover': '#0052CC',
        'thread-light': '#FFFFFF',
        'thread-light-gray': '#F5F5F5',
        'thread-light-border': '#E5E5E5',
        'thread-light-text': '#1A1A1A',
      }
    },
  },
  plugins: [],
}
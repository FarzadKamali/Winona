import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{vue,js,ts}',
    './App.{vue,js,ts}',
    './app.{vue,js,ts}',
    './Error.{vue,js,ts}',
    './error.{vue,js,ts}'
  ],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
  },
  daisyui: {
    // Add/rename themes as you like
    themes: ['light', 'dark'],
    logs: false,
  },
}
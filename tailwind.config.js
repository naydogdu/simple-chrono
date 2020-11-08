module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js', './public/**/*.html'],
  },
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'mono': ['Share Tech Mono', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('postcss-custom-properties'),
    require('autoprefixer')
  ]
};

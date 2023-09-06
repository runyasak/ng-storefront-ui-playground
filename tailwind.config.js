const { tailwindConfig } = require('ng-storefront-ui');

const sfTypography = require('@storefront-ui/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: ['./src/**/*.{html,ts}', './node_modules/ng-storefront-ui/**/*.{js,mjs}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      heading: ['Arial', 'Georgia'],
    },
  },
  plugins: [sfTypography],
};

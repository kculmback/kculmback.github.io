const defaults = require('tailwindcss/stubs/defaultConfig.stub');
const blue = defaults.theme.colors.blue;

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        primary: blue['600'],
        'primary-dark': blue['800'],
        'primary-light': blue['400'],
      },
      maxWidth: {
        '2xs': '16rem',
        '3xs': '12rem',
        '4xs': '8rem',
      },
      maxHeight: {
        xl: '36rem',
      },
    },
  },
  variants: {
    backgroundColor: [
      ...defaults.variants.backgroundColor,
      'dark',
      'dark-hover',
    ],
    borderColor: [...defaults.variants.borderColor, 'dark'],
    textColor: [...defaults.variants.textColor, 'dark', 'dark-hover'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
};

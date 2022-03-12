module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  theme: {
    screens: {
      'max-xs': { max: '374.5px' },
      'max-xl': { max: '1279.5px' },
      xl: '1280px',
    },
    colors: {
      primary: '#1B74E4',
      dark: '#050505',
      gray: {
        100: '#F0F2F5',
        200: '#F2F2F2',
        300: '#F7F8FA',
        400: '#E4E6EB',
        500: '#D8DADF',
        600: '#8A8D91',
        700: '#65676B',
      },
      blue: {
        100: '#E7F3FF',
        200: '#c4d2e7',
        700: '#3B5998',
      },
      scroll: '#BCC0C4',
      line: '#CED0D4',
      form: '#F0F2F5',
      accent: 'hsl(214, 89%, 52%)',
      danger: '#e41e3f',
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    extend: {
      height: {
        '3px': '3px',
        '19px': '19px',
        nav: '56px',
      },
      width: {
        '19px': '19px',
      },
      maxWidth: {
        xxl: '1464px',
      },
      strokeWidth: {
        32: '32px',
      },
      spacing: {
        '3px': '3px',
        '6px': '6px',
        '110px': '110px',
        nav: '56px',
      },
    },
  },
  plugins: [],
}

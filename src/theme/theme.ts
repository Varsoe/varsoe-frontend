const fontSizes = ['1.2rem', '1.4rem', '1.6rem', '2.0rem', '2.4rem', '3.2rem', '4.8rem', '6.4rem'];
export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes,
  colors: {
    white: '#fff',
    randomRed: '#FF2E6A',
    statusGreen: '#005E04',
    statusRed: '#CA003A',
    selectBg: 'rgba(8, 19, 45, 0.04)',
    green: {
      600: '#01BC08',
      500: '#2BC731',
      400: '#56D25A',
      300: '#80DD83',
      200: '#AAE9AD',
      100: '#CCF2CE',
    },
    yellow: {
      600: '#F5BD4F',
      500: '#F7C86C',
      400: '#F8D38A',
      300: '#FADEA7',
      200: '#FCE9C4',
      100: '#FDF2DC',
    },
    red: {
      600: '#F84141',
      500: '#F96161',
      400: '#FA8080',
      300: '#FBA0A0',
      200: '#FDC0C0',
      100: '#FED9D9',
    },
    black: {
      600: '#08132D',
      500: '#313A50',
      400: '#5A6273',
      300: '#838996',
      200: '#ADB0B9',
      100: '#CED0D5',
      50: '#E6E7EA',
      20: '#F5F5F7',
    },
    blue: {
      600: '#2860E1',
      500: '#4C7BE6',
      400: '#7095EB',
      300: '#93AFF0',
      200: '#B7CAF5',
      100: '#D4DFF9',
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'wigrum',
    heading: 'inherit',
  },
  fontWeights: {
    medium: 400,
    regular: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    h1: '96px',
    h2: '80px',
    h3: '56px',
    h4: '40px',
    h5: '36px',
    h6: '32px',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
  },
};

export type Theme = typeof theme;

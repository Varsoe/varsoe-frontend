import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: 'wigrum';
      src: url('/fonts/wigrum.otf');
  }
* {
  box-sizing: border-box;
}
html {
    width: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
  font-family: "Wigrum";
  font-size: 1rem;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

button {
  font-family: "Wigrum";
}
`;

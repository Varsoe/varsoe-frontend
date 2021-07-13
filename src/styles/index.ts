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

.DayPickerInput {
  font-family: 'Wigrum';
  display: block;
  font-size: 14px;
  
}
.DayPickerInput input {
  border: 1px solid #ced0d5;
  border-radius: 8px;
  height: 48px;
  width: 100%;
  padding: 16px 12px;
  &::placeholder {
    color: #ADB0B9;
  }
  &::focus {
    border: 1px solid #08132D;
  }
}
.DayPicker-Month{
  width: 200px;
}
`;

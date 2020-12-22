import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, *::after, *::before {
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  outline: 0;

}

*:focus {
  outline: 0;

}

body , #root {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text1};
  height: 100vh;
  width: 100vw;
}
body {
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}
`;

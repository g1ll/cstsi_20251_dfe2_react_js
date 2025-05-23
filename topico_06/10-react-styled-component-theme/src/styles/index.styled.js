/* eslint-disable no-undef */
import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
  &:hover {
  color: #535bf2;
  }

  @media (prefers-color-scheme: light) {
  &:hover {
    color: #747bff;
  }
}

}

body {
  margin: 0;
  padding: 0;
}
`;
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cssLogo from "/img/css3.png";
import "../public/css/style.css";
import "./App.css";
import DevIllustration from "./components/DevIllustration/DevIllustration";
import { Button, Title } from "./App.styles";


const getTheme = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

const detectThemeChanges = (callback) => {
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", ({ matches }) => callback(matches));
};


function App() {
  const [count, setCount] = useState(0);
  const [isThemeLight, setIsThemeLight] = useState(getTheme);

  useEffect(() => {
    detectThemeChanges(setIsThemeLight);
  }, []);

  const changeTheme=()=>{
      setIsThemeLight(!isThemeLight)
  }

  return (
    <>
      <div>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          target="_blank"
        >
          <img src={cssLogo} className="logo css_logo" alt="CSS logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title>Vite + React</Title>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button onClick={changeTheme}>Trocar tema </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     <DevIllustration isThemeLight={isThemeLight}/>
    </>
  );
}

export default App;

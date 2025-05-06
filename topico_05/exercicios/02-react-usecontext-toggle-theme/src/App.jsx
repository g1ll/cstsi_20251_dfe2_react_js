import { useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';

import { createContext } from 'react';

export const ThemeState = createContext({
  theme: '',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
   //implemente a lógica para alternar entre os temas light e dark
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    //altere o provider para incluir o toggleTheme
    <ThemeState.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeState.Provider>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ThemeProvider>
        <Home setCount={setCount} count={count} />
      </ThemeProvider>
    </>
  );
}

export default App;

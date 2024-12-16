import React, { createContext, useEffect, useState } from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Deteils from './components/Deteils';

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('USD');
  const [bar, setBar] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('bar')) {
      setBar(JSON.parse(localStorage.getItem('bar')));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, bar, setBar }}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deteils/:id" element={<Deteils />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };

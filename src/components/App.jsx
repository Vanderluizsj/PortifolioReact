import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Curriculo from '../pages/Curriculo';
import Index from '../pages/Index';
import Portifolio from '../pages/Portifolio';
import Navbar from '../components/Navbar/Navbar';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='container' id='efeito-vidro'>
      <HashRouter>
        <Navbar selectedIndex={0} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/portifolio" element={<Portifolio />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;

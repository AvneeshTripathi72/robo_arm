import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Solutions } from "./components/sections/Solutions";
import { Industries } from "./components/sections/Industries";
import { Infrastructure } from "./components/sections/Infrastructure";
import { Footer } from "./components/sections/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 font-sans transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Industries />
        <Infrastructure />
      </main>
      <Footer />
    </div>
  );
}

export default App;

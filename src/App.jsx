import "./App.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from './components/skills/Skills';
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import TopButton from "./components/topButton/TopButton";

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const toggleTheme = () => {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.style.backgroundColor = "var(--dark-primary)";
    } else {
      body.style.backgroundColor = "var(--light-primary)";
    }

    // Cleanup function to reset styles if needed
    return () => {
      body.style.backgroundColor = "";
    };
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Banner />
      <main>
        <About />
        < Skills theme={theme} />
        <Projects />
        <Contact theme={theme} />
      </main>
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;

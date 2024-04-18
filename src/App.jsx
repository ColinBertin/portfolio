import "./App.scss";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from './components/skills/Skills';
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const toggleTheme = () => {
    setTheme((state) => (state === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Banner />
      <main>
        <About />
        < Skills />
        <Projects />
        <Contact theme={theme} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

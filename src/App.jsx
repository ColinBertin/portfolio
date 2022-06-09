import React, {useState} from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import About from './components/about/About';
// import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {

  const [ theme, setTheme ] = useState('dark');

  const toggleTheme = () => {
    setTheme((state) => state === 'light' ? 'dark' : 'light' );
    console.log(theme)
  }

  return (
    <div className="App">
      < Navbar toggleTheme={toggleTheme} theme={theme} />
      < Banner />
      <main>
        < About theme={theme} />
        {/* < Skills /> */}
        < Projects theme={theme} />
        < Contact theme={theme} />
      </main>
    </div>
  );
}

export default App;

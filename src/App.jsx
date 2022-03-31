import './App.scss';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import About from './components/about/About';
// import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Banner />
      <main>
        < About />
        {/* < Skills /> */}
        < Projects />
        < Contact />
      </main>
    </div>
  );
}

export default App;

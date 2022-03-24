import './App.scss';
// import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      {/* < Navbar /> */}
      < Banner />
      <main>
        < Projects />
      </main>
    </div>
  );
}

export default App;

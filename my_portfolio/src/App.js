import { useContext, useRef } from 'react';
import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { GithubStats } from './Components/GithubStats';
import { Navbar } from './Components/Navbar';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { Sound } from './Components/Sound';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);
  const styles = {
    position: "relative",
    top: "70px"
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className="App">
      <div className='scrollTop' style={theme?{backgroundColor: '#000000'}:{backgroundColor: '#4a4a4a'}} onClick={scrollToTop}>
      <span className="material-symbols-outlined">expand_less</span>
      </div>
      <Navbar/>
      <div style={styles}>
      <About/>
      <Skills/>
      <Projects/>
      <GithubStats/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;

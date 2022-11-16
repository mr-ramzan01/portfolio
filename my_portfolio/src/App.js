import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { GithubStats } from './Components/GithubStats';
import { Navbar } from './Components/Navbar';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';

function App() {
  const styles = {
    position: "relative",
    top: "70px"
  }
  return (
    <div className="App">
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

import './App.css';
import { About } from './Components/About';
import { GithubStats } from './Components/GithubStats';
import { Navbar } from './Components/Navbar';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <GithubStats/>
    </div>
  );
}

export default App;

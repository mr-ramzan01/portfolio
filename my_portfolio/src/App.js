import './App.css';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;

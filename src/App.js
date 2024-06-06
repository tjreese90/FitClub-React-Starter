import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reason from './Components/Reasons/Reason';
function App() {
  return (
    <div className="App">
        <Hero />
        <Programs />
        <Reason />
        <Plans />
    </div>
  );
}

export default App;

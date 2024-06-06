import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reason from './Components/Reasons/Reason';
import Testimonials from './Components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
        <Hero />
        <Programs />
        <Reason />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
    </div>
  );
}

export default App;

import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Formula from './components/Formula';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import Purchase from './components/Purchase';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Benefits />
      <Formula />
      <Testimonials />
      <Comparison />
      <Purchase />
      <FinalCTA />
    </div>
  );
}

export default App;

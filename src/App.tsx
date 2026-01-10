import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">

      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Contact />
    </div>
  );
}

export default App;

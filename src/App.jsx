import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Studies from './pages/Studies';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#15153D] text-white overflow-x-hidden">
      {/* 3D Animated Background */}
      <ThreeBackground />

      {/* Radial gradient overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#08DDFF]/4 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#08DDFF]/3 blur-[150px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Studies />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Articles from './components/Articles';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Articles />
        <Contact />
      </main>
    </div>
  )
}

export default App

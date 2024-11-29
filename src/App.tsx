import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-white">
      <ScrollProgress />
      <Background3D />
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
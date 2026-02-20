import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Footer, FloatingWhatsApp } from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;

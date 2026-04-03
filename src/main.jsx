import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Marquee from './sections/Marquee/Marquee';
import Projects from './sections/Projects/Projects';
import Process from './sections/Process/Process';
import Testimonials from './sections/Testimonials/Testimonials';
import Contact from './sections/Contact/Contact';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <NavBar />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
    </main>
    <Footer /> 
  </StrictMode>,
)

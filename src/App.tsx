import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

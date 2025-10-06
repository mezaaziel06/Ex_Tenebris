import React from 'react';
import Hero from './assets/components/Hero';
import Gallery from './assets/components/Gallery';
import Navbar from './assets/components/Navbar';
import Team from './assets/components/Team';
import Footer from './assets/components/Footer';
import News from './assets/components/news'
const App: React.FC = () => {
  return (
    <main className="scroll-smooth bg-black text-white font-cinzel">
      
      <section id="hero">
        <Hero />
      </section>
       <Navbar />

     
      <section id="inferno">
        <Gallery />
      </section>
       <Team/>
       <News/>
       <Footer/>
    </main>
  );
};

export default App;

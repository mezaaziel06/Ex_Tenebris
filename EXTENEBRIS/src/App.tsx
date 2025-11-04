import React from 'react';
import Hero from './assets/components/Hero';
import Gallery from './assets/components/Galeria/Gallery';
import Navbar from './assets/components/Navbar';
import Team from './assets/components/Team';
import Footer from './assets/components/Footer';
import News from './assets/components/news';

const App: React.FC = () => {
  return (
    <main className="scroll-smooth bg-black text-white font-cinzel">
      
      {/* Sección principal */}
      <section id="hero">
        <Hero />
      </section>

      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Galería (Inferno) */}
      <section id="inferno">
        <Gallery />
      </section>

      {/* Equipo */}
      <section id="team">
        <Team />
      </section>

      {/* Noticias */}
      <section id="news">
        <News />
      </section>

      {/* Pie de página */}
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default App;

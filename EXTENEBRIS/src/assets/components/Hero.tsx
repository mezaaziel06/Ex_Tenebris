import React from 'react';
import extenebris from '../images/ex-tenebris.svg';

const Hero: React.FC = () => {
  const scrollToInferno = () => {
    const section = document.getElementById('inferno');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#2a0000] via-[#0a0a0a] to-black text-white px-6 py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-cinzel bg-gradient-to-b from-white to-red-700 bg-clip-text text-transparent drop-shadow-lg">
            EX TENEBRIS
          </h1>
          <p className="text-3xl text-zinc-100 font-cormorant">
            Desciende al infierno. Enfrenta tu redención o abraza la venganza.
          </p>
          <p className="text-gray-400">Vive una experiencia de acción y narrativa oscura única.</p>
          <button
            onClick={scrollToInferno}
            className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded uppercase tracking-wide font-semibold transition duration-300"
          >
            Ver más
          </button>
          <div className="mt-8 text-zinc-400 text-sm md:text-base leading-relaxed">
            <p>
              Encarna al Santo, una entidad destinada al infierno. Sin recuerdos de los pecados que lo condenaron, deberá atravesar los Siete Círculos en busca de su destino.
            </p>
            <p className="mt-4">
              ¿Será el redentor de los humanos que sufren por sus pecados o el vengador de los condenados injustamente?
            </p>
            <p className="mt-4">
              En Ex Tenebris explorarás escenarios inspirados en el infierno de Dante, enfrentándote a hordas de enemigos y descubriendo los secretos de tu pasado. Con un combate <span className="italic">Hack & Slash</span> que fusiona precisión y brutalidad, una narrativa profunda y decisiones que afectan el curso de la historia, cada paso que des te acercará a tu destino final.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={extenebris}
            alt="Ex Tenebris Logo"
            className="w-full max-w-[28rem] animate-pulse drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import iraImg from '../images/ira.jpg';
import heresiaImg from '../images/heresia.jpg';
import traicionImg from '../images/traicion.jpg';
import cuernos from '../images/cuernos.svg'

interface Card {
  title: string;
  image: string;
  description: string;
}

const cards: Card[] = [
  {
    title: "Círculo de la Ira",
    image: iraImg,
    description: "Enfrenta a los condenados que se alimentan del odio eterno.",
  },
  {
    title: "Círculo de la Herejía",
    image: heresiaImg,
    description: "Descubre secretos prohibidos entre ruinas ardientes.",
  },
  {
    title: "Círculo de la Traición",
    image: traicionImg,
    description: "¿Confiarás en las sombras o te convertirás en una de ellas?",
  },
];

const InfernoGallery: React.FC = () => {
  return (
    <section className="bg-black py-16 px-6 text-white font-cinzel">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Explora el Infierno
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-zinc-900 border border-zinc-00 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.1)] hover:shadow-[0_0_30px_rgba(255,0,0,0.2)] hover:scale-105 transition-all duration-300 flex flex-col"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-zinc-00 leading-relaxed text-lg">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-24 border border-zinc-700 rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-b from-zinc-900 to-black shadow-[0_0_30px_rgba(255,0,0,0.1)]">
  <div className="md:w-1/2">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      What is Desentraland Games
    </h3>
    <p className="text-zinc-400 mb-3 leading-relaxed text-sm md:text-base">
      Sumérgete en un mundo donde cada elección tiene consecuencias.
      Enfrenta tus miedos y descubre la oscuridad que yace dentro del
      alma humana.
    </p>
    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
      Desentraland Games fusiona arte, narrativa y desafío en una
      experiencia inmersiva inspirada en los círculos del Infierno de
      Dante.
    </p>
  </div>

  <div className="md:w-1/2 relative flex justify-center">
    <img
      src={cuernos}
      alt="Demonio"
      className="w-64 md:w-[20rem] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse-slow"
    />
  </div>
</div>

    </section>
  );
};

export default InfernoGallery;
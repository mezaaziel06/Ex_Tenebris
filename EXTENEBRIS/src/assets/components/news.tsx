import React from 'react';
import ira from '../images/ira.jpg'; 

const News: React.FC = () => {
  return (
    <section id="noticias" className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* Fondo rojo en la esquina superior izquierda */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#6e0000,_#000000_70%)] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
          <h2 className="text-4xl font-bold font-cinzel text-left">Últimas noticias</h2>
          <p className="text-zinc-300 text-lg font-cormorant text-left">
            Sigue nuestras redes sociales para enterarte de las nuevas actualizaciones, ver contenido exclusivo y compartir la emoción por <span className="text-red-500 font-semibold">Ex Tenebris</span> con la comunidad.
          </p>

          <div className="grid grid-cols-4 gap-4 text-center max-w-md">
            {[
              { value: '02', label: 'Días' },
              { value: '23', label: 'Horas' },
              { value: '48', label: 'Minutos' },
              { value: '00', label: 'Segundos' },
            ].map((item, index) => (
              <div key={index}>
                <p className="text-5xl font-bold text-red-600 font-cinzel">{item.value}</p>
                <p className="uppercase text-sm text-zinc-400 tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-red-700 hover:bg-red-600 text-white px-8 py-3 rounded uppercase tracking-wide font-semibold transition duration-300">
            REGÍSTRATE AHORA
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={ira}
            alt="Figura infernal del círculo de la ira"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default News;

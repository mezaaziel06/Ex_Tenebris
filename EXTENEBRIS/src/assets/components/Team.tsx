import React from 'react';
import Michelle from '../images/Michelle.svg';
import Toto from '../images/toto.svg';
import Charlie from '../images/charlie.svg';
import Mauricio from '../images/mauricio.svg';
import Omar from '../images/omar.svg'; 

interface Member {
  name: string;
  role: string;
  image: string;
}

const team: Member[] = [
  {
    name: 'LUIS',
    role: 'Narrativa & Diseño de niveles',
    image: Toto,
  },
  {
    name: 'MICHELLE',
    role: 'Arte & Ilustración',
    image: Michelle,
  },
  {
    name: 'MAURICIO',
    role: 'Programación & Gameplay',
    image: Mauricio,
  },
  {
    name: 'CHARLIE',
    role: 'Sonido & Música',
    image: Charlie,
  },
  {
    name: 'OMAR',
    role: 'Producción & Dirección',
    image: Omar,
  },
];

const Team: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {team.map((member, index) => (
        <div
          key={index}
          className="bg-transparent border border-yellow-300 rounded-lg p-4 text-center shadow-[0_0_20px_rgba(0,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 transition-transform"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-cinzel text-white">{member.name}</h3>
          <p className="text-sm text-zinc-400">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;

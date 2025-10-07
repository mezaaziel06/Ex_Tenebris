import React from "react";
import Michelle from "../images/Michelle.svg";
import Toto from "../images/Toto.svg";
import Charlie from "../images/Charlie.svg";
import Mauricio from "../images/Mauricio.svg";
import Omar from "../images/Omar.svg";

type Member = { name: string; role: string; image: string };

const team: Member[] = [
  { name: "LUIS",     role: "Narrativa & Diseño de niveles", image: Toto },
  { name: "MICHELLE", role: "Arte & Ilustración",            image: Michelle },
  { name: "MAURICIO", role: "Programación & Gameplay",       image: Mauricio },
  { name: "CHARLIE",  role: "Sonido & Música",               image: Charlie },
  { name: "OMAR",     role: "Producción & Dirección",        image: Omar },
];

const Team: React.FC = () => {
  return (
    <section className="
  relative text-white py-10 md:py-12
  bg-[#0a0a0a]
  bg-[linear-gradient(180deg,#000000_0%,#0a0a0a_55%,#2a0000_100%),radial-gradient(900px_520px_at_0%_100%,rgba(110,0,0,.25)_0%,transparent_60%)]
  bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,0%_100%]
"
>
      <h2 className="text-center font-cinzel text-2xl md:text-3xl font-bold mb-10">
        Conoce al equipo desarrollador
      </h2>

      {/* contenedor: no full width, con padding lateral */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* 3 arriba, 2 abajo centrados */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m, i) => (
            <div
              key={i}
              className={[
                i === 3 ? "md:col-start-1" : "",
                i === 4 ? "md:col-start-3" : "",
              ].join(" ")}
            >
              <TeamCard {...m} />
            </div>
          ))}
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
};

export default Team;

/* ================= Card (idéntica al mock) ================= */
function TeamCard({ name, role, image }: Member) {
  return (
    <article className="group">
      {/* aspecto 3:4 para que NO sea cuadrada y no crezca de más */}
      <div
        className="
          relative aspect-[3/4] w-full max-w-sm mx-auto
          overflow-hidden clip-chanfer
        "
      >
        {/* borde dorado con chaflán y glow */}
        <span className="frame-gold pointer-events-none absolute inset-0" />
        <span className="pointer-events-none absolute -inset-[2px] rounded-[2px] frame-glow opacity-70 group-hover:opacity-95 transition" />

        {/* líneas internas (tres, finas) */}
        <span className="absolute left-[18%] top-[18%] h-[58%] w-[1px] inner-gold" />
        <span className="absolute left-[26%] top-[26%] h-[52%] w-[1px] inner-gold/80" />
        <span className="absolute left-[34%] top-[18%] h-[58%] w-[1px] inner-gold/60" />

        {/* personaje apoyado abajo y centrado */}
        <img
          src={image}
          alt={name}
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            w-[78%] max-h-[92%] object-contain
            drop-shadow-[0_28px_60px_rgba(0,0,0,.85)]
            select-none
          "
        />
      </div>

      {/* texto compacto bajo la card */}
      <div className="mt-4 max-w-sm mx-auto">
        <h3 className="font-cinzel text-[16px] tracking-wide leading-none">{name}</h3>
        <p className="mt-1 text-[11.5px] text-zinc-400 leading-relaxed">{role}</p>
      </div>
    </article>
  );
}

/* ================= CSS local ================= */
const css = `
/* chaflán arriba/abajo a la derecha */
.clip-chanfer{
  clip-path: polygon(
    0% 0%,
    86% 0%,
    100% 10%,
    100% 90%,
    92% 100%,
    0% 100%
  );
  border-radius: 2px;
}

/* sólo el trazo dorado (más fino) con máscara */
.frame-gold{
  padding: 1.4px;
  border-radius: 2px;
  background: linear-gradient(180deg,#FFF3B8,#EFCB7A,#FFE7B2);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  clip-path: polygon(
    0% 0%,
    86% 0%,
    100% 10%,
    100% 90%,
    92% 100%,
    0% 100%
  );
  filter: drop-shadow(0 0 10px rgba(255,225,150,.45));
}

/* glow suave alrededor del borde */
.frame-glow{
  background: radial-gradient(65% 65% at 50% 50%, rgba(255,225,150,.28), transparent 70%);
  filter: blur(10px);
}

/* líneas internas doradas */
.inner-gold{
  background: linear-gradient(to bottom, rgba(255,236,192,.85), rgba(255,226,160,.25), rgba(255,226,160,0));
}

/* pulso leve on hover */
@keyframes goldPulse { 0%,100%{ opacity:.9 } 50%{ opacity:1 } }
.group:hover .frame-gold{ animation: goldPulse 2.2s ease-in-out infinite; }
`;

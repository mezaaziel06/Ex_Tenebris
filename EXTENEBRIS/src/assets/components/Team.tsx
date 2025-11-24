import React, { useRef, useEffect, useState } from "react";
import Michelle from "../images/Michelle.svg";
import Toto from "../images/toto.svg";
import Charlie from "../images/charlie.svg";
import Mauricio from "../images/mauricio.svg";
import Omar from "../images/omar.svg";

type Member = { name: string; role: string; image: string };

const originalTeam: Member[] = [
  { name: "LUIS", role: "Narrativa & Diseño de niveles", image: Toto },
  { name: "MICHELLE", role: "Arte & Ilustración", image: Michelle },
  { name: "MAURICIO", role: "Programación & Gameplay", image: Mauricio },
  { name: "CHARLIE", role: "Sonido & Música", image: Charlie },
  { name: "OMAR", role: "Producción & Dirección", image: Omar },
];

// duplicado para el loop infinito
const team = [...originalTeam, ...originalTeam];

const Team: React.FC = () => {
  // sliderRef puede ser null inicialmente
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // en el navegador setInterval devuelve un number
  const autoplayRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector(".team-card") as HTMLElement | null;
    if (firstCard) {
      // ancho real + gap (40)
      const width = firstCard.offsetWidth + 40;
      setCardWidth(width);
      // colocamos en el medio (inicio del segundo bloque)
      slider.scrollLeft = originalTeam.length * width;
      // inicializar active card
      setTimeout(() => {
        updateActiveCard(); // detecta la card centrada al inicio
      }, 50);
    }

    // limpiar al desmontar
    return () => {
      if (autoplayRef.current != null) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // función reutilizable para determinar la card centrada
  const updateActiveCard = () => {
    const slider = sliderRef.current;
    if (!slider || !cardWidth) return;

    const center = slider.scrollLeft + slider.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    team.forEach((_, index) => {
      const cardCenter = index * cardWidth + cardWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    // Normalizamos al rango originalTeam (0..len-1)
    setActiveIndex(closestIndex % originalTeam.length);
  };

  const handleScroll = () => {
    if (isDragging.current) return;

    const slider = sliderRef.current;
    if (!slider || !cardWidth) return;

    const fullWidth = cardWidth * team.length;
    const half = cardWidth * originalTeam.length;

    // loop infinito (teleport silencioso)
    if (slider.scrollLeft <= 10) {
      slider.scrollLeft = slider.scrollLeft + half;
    }
    if (slider.scrollLeft >= fullWidth - slider.clientWidth - 10) {
      slider.scrollLeft = slider.scrollLeft - half;
    }

    updateActiveCard();
  };

  // AUTOPLAY (solo cuando hovering === true)
  const startAutoplay = () => {
    stopAutoplay();
    // guardamos id numérico
    autoplayRef.current = window.setInterval(() => {
      const slider = sliderRef.current;
      if (!slider || isDragging.current || !cardWidth) return;

      slider.scrollBy({
        left: Math.round(cardWidth * 0.9),
        behavior: "smooth",
      });

      // actualizamos active (la transición dura ~550ms -> dejamos leve delay opcional)
      setTimeout(updateActiveCard, 300);
    }, 2000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current != null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    if (hovering && cardWidth > 0) startAutoplay();
    else stopAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovering, cardWidth]);

  const handleDragStart = () => {
    isDragging.current = true;
    stopAutoplay();
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    // dejamos un pequeño timeout para que la inercia termine y luego asignamos active
    setTimeout(() => {
      updateActiveCard();
      if (hovering) startAutoplay();
    }, 120);
  };

  return (
    <section
      className="
        relative text-white py-12
        bg-[#0a0a0a]
        bg-[linear-gradient(180deg,#000000_0%,#0a0a0a_55%,#2a0000_100%),radial-gradient(900px_520px_at_0%_100%,rgba(110,0,0,.25)_0%,transparent_60%)]
        bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,0%_100%]
      "
    >
      <h2 className="text-center font-cinzel text-3xl font-bold mb-10">
        Conoce al equipo desarrollador
      </h2>

      <div className="relative max-w-7xl mx-auto px-8">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          className="
            flex gap-10 overflow-x-auto snap-x snap-mandatory pb-6
            scrollbar-none select-none cursor-pointer
          "
        >
          {team.map((m, i) => {
            // comparamos contra activeIndex usando módulo porque el array está duplicado
            const isActive = i % originalTeam.length === activeIndex;

            // style inline tipado
            const cardStyle: React.CSSProperties = {
              transform: isActive ? "scale(1.08)" : "scale(0.92)",
              opacity: isActive ? 1 : 0.65,
              transition: "transform 0.55s cubic-bezier(.2,.9,.2,1), opacity 0.45s ease",
            };

            return (
              <div
                key={i}
                className="team-card snap-center shrink-0 w-[65%] sm:w-[45%] md:w-[32%] lg:w-[26%]"
                style={cardStyle}
              >
                {/* Sintaxis correcta */}
                <TeamCard {...m} />
              </div>
            );
          })}
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
};

export default Team;

/* ---- TeamCard idéntico ---- */
function TeamCard({ name, role, image }: Member) {
  return (
    <article className="group">
      <div
        className="
          relative aspect-[3/4] w-full max-w-sm mx-auto
          overflow-hidden clip-chanfer
        "
      >
        <span className="frame-gold pointer-events-none absolute inset-0" />
        <span className="pointer-events-none absolute -inset-[2px] rounded-[2px] frame-glow opacity-70 group-hover:opacity-95 transition" />

        <span className="absolute left-[18%] top-[18%] h-[58%] w-[1px] inner-gold" />
        <span className="absolute left-[26%] top-[26%] h-[52%] w-[1px] inner-gold/80" />
        <span className="absolute left-[34%] top-[18%] h-[58%] w-[1px] inner-gold/60" />

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

      <div className="mt-4 max-w-sm mx-auto">
        <h3 className="font-cinzel text-[16px] tracking-wide leading-none">{name}</h3>
        <p className="mt-1 text-[11.5px] text-zinc-400 leading-relaxed">{role}</p>
      </div>
    </article>
  );
}

const css = `
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

.frame-glow{
  background: radial-gradient(65% 65% at 50% 50%, rgba(255,225,150,.28), transparent 70%);
  filter: blur(10px);
}

.inner-gold{
  background: linear-gradient(to bottom, rgba(255,236,192,.85), rgba(255,226,160,.25), rgba(255,226,160,0));
}

@keyframes goldPulse { 0%,100%{ opacity:.9 } 50%{ opacity:1 } }
.group:hover .frame-gold{ animation: goldPulse 2.2s ease-in-out infinite; }

.scrollbar-none::-webkit-scrollbar { display: none; }
`;

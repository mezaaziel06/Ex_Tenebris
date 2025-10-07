import React from "react";
import iraImg from "../../images/ira.jpg";
import heresiaImg from "../../images/heresia.jpg";
import traicionImg from "../../images/traicion.jpg";
import CuernosSection from "./componentes/InfernoSection";

type Card = { title: string; image: string; description: string; focus?: string };

const cards: Card[] = [
  {
    title: "Vive cada escenario",
    image: iraImg,
    description:
      "Sumérgete en un ambiente inspirado en los 7 círculos del infierno de Dante con estilos visuales estéticos y oscuros.",
  },
  {
    title: "Decide tu destino",
    image: heresiaImg,
    description:
      "Con cada paso hacia el corazón del infierno se decide el destino del Santo; no hay cabida para la duda o errores.",
  },
  {
    title: "Jefes y enemigos desafiantes",
    image: traicionImg,
    description:
      "Combate con astucia y determinación contra poderosos enemigos que harán lo posible por frenar tu descenso.",
    focus: "90% 10%", // ⬅️ encuadre más al centro/bajo para la última
  },
];

const InfernoGallery: React.FC = () => {
  return (
    <>
      <section
  className="
  relative isolate text-white px-6 md:px-8 pt-16 md:pt-24 overflow-visible
  bg-[#0a0a0a]
  bg-[linear-gradient(180deg,#000000_0%,#0c0b0b_55%,#2a0000_100%),radial-gradient(1100px_720px_at_50%_0%,rgba(110,0,0,.22)_0%,transparent_70%)]
  bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,50%_0%]
"
>
        {/* grano sutil */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: "url('/noise.png')" }}
        />

        <SectionStars />

        <h2 className="relative z-10 text-center font-cinzel text-3xl md:text-4xl font-bold tracking-wide">
          Explora el Infierno
        </h2>

        {/* GRID */}
        <div className="relative z-10 mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 md:mt-14 md:grid-cols-3">
          {cards.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>

        <style>{cssLocal}</style>
      </section>

      {/* ⬇️ La sección de Cuernos va aparte, no dentro del marco de arriba */}
      <CuernosSection />
    </>
  );
};

export default InfernoGallery;

/* ================== Card ================== */
/* Rectangular, más alta que ancha, imagen = ancho del texto,
   bordes SOLO en los lados y abajo (no arriba). */
function FeatureCard({ title, image, description, focus }: Card) {
  return (
    <article
      className="
        group relative grid overflow-hidden rounded-sm
        h-[460px] md:h-[500px]
        grid-rows-[230px_1fr] md:grid-rows-[260px_1fr]
      "
    >
      {/* Imagen arriba con quiebres */}
      <div className="relative row-start-1 row-end-2">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover img-notch"
          style={{ objectPosition: focus || "50% 50%" }} // ⬅️ usa la prop focus
        />
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
      </div>

      {/* Texto con SOLO bordes laterales y abajo */}
      <div
        className="
          row-start-2 row-end-3 flex flex-col items-center text-center
          border-x border-b border-white/25
          bg-[rgba(18,18,18,.60)]
          px-6 pt-6 pb-7 overflow-hidden
        "
      >
        <h3 className="font-semibold text-[18px] md:text-[19px]">{title}</h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-300">
          {description}
        </p>
        <div className="mt-auto w-full">
          <div className="mx-auto mt-5 h-[1px] w-full bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
        </div>
      </div>
    </article>
  );
}

/* ========== Estrellas / decorativos ========== */
function SectionStars() {
  const s = [
    { x: "8%", y: "22%", t: "dot" },
    { x: "18%", y: "10%", t: "cross" },
    { x: "28%", y: "36%", t: "cross" },
    { x: "64%", y: "16%", t: "dot" },
    { x: "82%", y: "30%", t: "cross" },
    { x: "92%", y: "12%", t: "dot" },
    { x: "12%", y: "78%", t: "cross" },
  ];
  return (
    <>
      {s.map((p, i) =>
        p.t === "cross" ? (
          <span
            key={`c-${i}`}
            className="absolute z-0 h-[7px] w-[7px] rotate-45 bg-cyan-300/90 twinkle-soft shadow-[0_0_10px_2px_rgba(120,220,255,.6)]"
            style={{ left: p.x, top: p.y }}
          />
        ) : (
          <span
            key={`d-${i}`}
            className="absolute z-0 h-[6px] w-[6px] rounded-full bg-amber-300 twinkle-dot shadow-[0_0_16px_6px_rgba(255,190,120,.45)]"
            style={{ left: p.x, top: p.y }}
          />
        )
      )}
    </>
  );
}

/* ================ CSS embebido ================ */
const cssLocal = `
.img-notch{
  clip-path:
    polygon(
      0 0, 8% 0, 10% 12px, 22% 12px, 24% 0,
      38% 0, 40% 12px, 60% 12px, 62% 0,
      76% 0, 78% 12px, 92% 12px, 94% 0,
      100% 0, 100% 100%, 0 100%
    );
  transform: translateZ(0);
}
@keyframes twinkleSoft {
  0%, 100% { transform: rotate(45deg) scale(1); opacity:.85; filter: drop-shadow(0 0 6px rgba(120,220,255,.45)); }
  50%      { transform: rotate(45deg) scale(1.14); opacity:1;  filter: drop-shadow(0 0 10px rgba(120,220,255,.75)); }
}
.twinkle-soft { animation: twinkleSoft 3.4s ease-in-out infinite; }
@keyframes twinkleDot {
  0%, 100% { transform: translateY(0) scale(1); opacity:.8; }
  50%      { transform: translateY(-1px) scale(1.18); opacity:1; }
}
.twinkle-dot { animation: twinkleDot 2.6s ease-in-out infinite; }
`;

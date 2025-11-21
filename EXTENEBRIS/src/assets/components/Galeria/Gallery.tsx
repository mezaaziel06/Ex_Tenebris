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
    focus: "90% 10%",
  },
];

const InfernoGallery: React.FC = () => {
  return (
    <>
      <section
        className="
          relative isolate text-white px-6 md:px-8 pt-28 md:pt-40 overflow-visible
          bg-[#0a0a0a]
          bg-[linear-gradient(180deg,#000000_0%,#0c0b0b_55%,#2a0000_100%),radial-gradient(1100px_720px_at_50%_0%,rgba(110,0,0,.22)_0%,transparent_70%)]
          bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,50%_0%]
        "
      >
        {/* fondo decorativo a partir de la imagen subida (ruta local convertida en URL por entorno) */}
        <img
          src="/mnt/data/b4bc1251-1657-4ebb-8249-ebfd69887f62.png"
          alt="mockup-decor"
          className="pointer-events-none absolute right-0 top-0 max-w-[520px] opacity-20 -translate-y-6 md:opacity-30"
          style={{ filter: "blur(8px) saturate(.9)" }}
        />

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

      {/* ⬇️ La sección de Cuernos va aparte */}
      <CuernosSection />
    </>
  );
};

export default InfernoGallery;

/* ================= FeatureCard (con animaciones A: elegante dorado + aura demoníaca) ================= */
function FeatureCard({ title, image, description, focus }: Card) {
  return (
    <article
      className="
        group relative grid overflow-hidden rounded-sm
        h-[460px] md:h-[500px]
        grid-rows-[230px_1fr] md:grid-rows-[260px_1fr]
        transition-all duration-500 ease-out
      "
    >
      {/* --- AURA DEMONÍACA (rojo) detrás de la card, visible en hover --- */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute -inset-4 z-0 opacity-0 rounded-md
          transition-all duration-600 ease-out
          group-hover:opacity-100
        "
        style={{
          boxShadow:
            "0 40px 80px rgba(42, 6, 6, 0.52), 0 10px 30px rgba(120, 20, 8, 0.28), inset 0 -20px 80px rgba(60,10,8,0.18)",
          background:
            "radial-gradient(400px 160px at 10% 20%, rgba(255,120,60,0.06), transparent 25%), radial-gradient(300px 120px at 85% 70%, rgba(255,40,30,0.06), transparent 30%)",
          transform: "translateY(8px) scale(0.98)",
        }}
      />

      {/* --- GLOW DORADO ELEGANTE (sobre la card) --- */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 z-10 opacity-0 rounded-sm
          transition-all duration-400 ease-out
          group-hover:opacity-100
        "
        style={{
          boxShadow:
            "0 8px 30px rgba(255,200,120,0.06), 0 0 120px rgba(255,200,120,0.06), inset 0 0 60px rgba(255,210,150,0.02)",
          background:
            "linear-gradient(180deg, rgba(255,200,120,0.02), rgba(255,210,150,0.01))",
          mixBlendMode: "screen",
        }}
      />

      {/* Imagen arriba */}
      <div className="relative row-start-1 row-end-2 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            absolute inset-0 h-full w-full object-cover img-notch 
            transition-transform duration-700 ease-out
            group-hover:scale-110 group-hover:brightness-[1.12]
          "
          style={{ objectPosition: focus || "50% 50%" }}
        />
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
      </div>

      {/* Texto */}
      <div
        className="
          row-start-2 row-end-3 flex flex-col items-center text-center
          border-x border-b border-white/25
          bg-[rgba(18,18,18,.60)]
          px-6 pt-6 pb-7 overflow-hidden
          transition-all duration-400
        "
      >
        <h3 className="font-semibold text-[18px] md:text-[19px] tracking-wide">
          {title}
        </h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-300">
          {description}
        </p>

        {/* Linea decorativa */}
        <div className="mt-auto w-full">
          <div className="
            mx-auto mt-5 h-[1px] w-full 
            bg-gradient-to-r from-white/40 via-white/10 to-transparent
            transition-all duration-700
            group-hover:from-amber-300/70 group-hover:via-amber-200/20
          " />
        </div>
      </div>

      {/* --- PULSO DORADO (latido) que aparece sutilmente en hover --- */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 opacity-0 rounded-full transition-all duration-700 ease-out group-hover:opacity-70 pulse-gold"
      />

      {/* --- ELEVACIÓN y ZOOM de la card entera en hover (aplica transform) --- */}
      <style>{`
        .group:hover { transform: translateY(-10px) scale(1.03); transition: transform 380ms cubic-bezier(.2,.9,.2,1); }
      `}</style>
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
/* image notch */
.img-notch{
  clip-path:
    polygon(
      0 0, 8% 0, 10% 12px, 22% 12px, 24% 0,
      38% 0, 40% 12px, 60% 12px, 62% 0,
      76% 0, 78% 12px, 92% 12px, 94% 0,
      100% 0, 100% 100%, 0 100%
    );
  transform: translateZ(0);
  will-change: transform, filter;
}

/* twinkles */
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

/* Pulse dorado (latido sutil) */
@keyframes pulseGold {
  0% { transform: scale(.86); opacity: .0; filter: blur(0px); }
  50% { transform: scale(1.05); opacity: .6; filter: blur(8px); }
  100% { transform: scale(.98); opacity: .0; filter: blur(0px); }
}
.pulse-gold { animation: pulseGold 2.2s ease-in-out infinite; background: radial-gradient(circle at center, rgba(255,200,120,0.18), rgba(255,160,60,0.06), transparent 45%); }

/* Glow dorado elegante (aparece sobre la card) */
.glow-card {
  box-shadow:
    0 0 22px rgba(255, 188, 80, 0.18),
    0 0 42px rgba(255, 180, 70, 0.12),
    inset 0 0 18px rgba(255, 210, 120, 0.08);
  border-radius: 4px;
  transition: box-shadow 0.4s ease-out;
}

/* apoyo: suavizar sombras y rendimiento */
.group img { backface-visibility: hidden; -webkit-backface-visibility: hidden; }

/* small accessibility tweak for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .group, .group img, .pulse-gold { animation: none !important; transition: none !important; }
}
`;


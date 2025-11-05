import React from "react";
import santoPng from "../images/ex-tenebris.svg"; // lo dejas así

const HeroExtenebris: React.FC = () => {
  const scrollToInferno = () => {
    document.getElementById("inferno")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="
        relative min-h-screen overflow-hidden text-white
        /* Fondo diagonal: rojo sup-izq -> negro inf-der + halo cálido */
        bg-[#0a0a0a]
        bg-[linear-gradient(135deg,#3b0000_0%,#1a0a0a_46%,#000000_100%),radial-gradient(1100px_520px_at_62%_42%,rgba(255,140,60,0.40)_0%,rgba(255,120,40,0.22)_28%,transparent_62%)]
        bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,center]
      "
    >
      {/* Marco del mock (opcional) */}
      <div className="pointer-events-none absolute inset-4 rounded-sm ring-2 ring-[#3BB4FF]/30" />

      {/* Viñeta + grano */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_15%_10%,transparent,rgba(0,0,0,.25)_70%,rgba(0,0,0,.6)_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')" }} />

      {/* Estrellas globales (dispersas) */}
      <ParticlesGlobal />

      {/* Ticks laterales 01 / 05 */}
      <SideTicks />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:gap-8 lg:px-10">
        {/* IZQUIERDA */}
        <div className="space-y-6 md:space-y-7">
          <h1 className="text-5xl md:text-6xl font-cinzel bg-gradient-to-b from-white to-red-700 bg-clip-text text-transparent drop-shadow-lg">
            EX TENEBRIS
          </h1>

          <p className="max-w-xl font-[450] leading-relaxed text-zinc-200">
            Desciende al infierno. Enfrenta tu redención o abraza la venganza.
          </p>
          <p className="max-w-lg text-sm tracking-wide text-zinc-400">
            Vive una experiencia de acción y narrativa oscura única.
          </p>

          {/* Botón idéntico al Figma */}
          <div className="pt-1">
            <button
              onClick={scrollToInferno}
              className="vermas-btn relative inline-flex items-center px-7 py-2 text-[13px] font-semibold uppercase tracking-[.18em]"
            >
              <span className="relative z-10">Ver más…</span>
              {/* Ornamentos / notch */}
              <span className="ornament-left" />
              <span className="ornament-right" />
            </button>
          </div>

          {/* Copy inferior */}
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-zinc-300">
            <p>
              Encarna al Santo, una alma desterrada al Infierno. Sin recuerdos de los
              pecados que lo condenaron, deberá atravesar los Siete Círculos en busca de su destino.
            </p>
            <p>
              ¿Será la redención la que libere su espíritu del tormento… o la sed de venganza lo consumirá?
            </p>
            <p>
              Explora escenarios inspirados en el Infierno de Dante y domina un combate <em>Hack &amp; Slash</em> que exige fuerza, precisión y paciencia.
            </p>
          </div>

          <div className="h-px w-72 bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
        </div>

        {/* DERECHA */}
        <div className="relative flex items-end justify-center">
          {/* Estela animada (glow+rayos+chispas) */}
          <Estela />

          {/* Estrellas alrededor del personaje */}
          <CharacterStars />

          {/* Línea vertical con shimmer */}
          <div className="shimmer-line absolute left-6 top-6 hidden h-[430px] w-[1px] md:block" />

          <img
            src={santoPng}
            alt="El Santo - protagonista"
            className="relative z-10 w-[520px] max-w-[75vw] select-none drop-shadow-[0_30px_60px_rgba(0,0,0,.9)]"
          />
        </div>
      </div>

      {/* Keyframes y estilos locales */}
      <style>{cssAnimations}</style>
    </section>
  );
};

export default HeroExtenebris;

/* ———— Subcomponentes ———— */

function Estela() {
  return (
    <div className="pointer-events-none absolute right-2 top-6 h-[560px] w-[560px] -translate-x-1">
      {/* Glow principal: pulso lento */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,165,90,.55)_0%,rgba(255,130,50,.28)_30%,transparent_62%)] glow-pulse" />
      {/* Glow secundario: pulso desfasado */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,165,90,.28)_0%,transparent_60%)] glow-pulse delay-2s" />
      {/* Rayos: giro muy lento + respiración */}
      <div className="absolute inset-0 rays-spin" />
      {/* Chispas puntuales */}
      <span className="absolute right-[42%] top-10 h-2 w-2 rounded-full bg-amber-300 spark" />
      <span className="absolute right-24 top-40 h-1.5 w-1.5 rounded-full bg-orange-300 spark delay-1s" />
      <span className="absolute right-16 top-[210px] h-1.5 w-1.5 rounded-full bg-amber-200 spark delay-3s" />
    </div>
  );
}

function SideTicks() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-8 hidden select-none flex-col items-center justify-between md:flex lg:right-14">
      <div className="flex flex-col items-center gap-3 text-[10px] tracking-widest text-zinc-400/90">
        <span>01</span>
        <span className="h-48 w-px bg-gradient-to-b from-zinc-500/70 to-transparent" />
      </div>
      <div className="flex flex-col items-center gap-3 text-[10px] tracking-widest text-zinc-400/90">
        <span>05</span>
        <span className="h-48 w-px bg-gradient-to-t from-zinc-500/70 to-transparent" />
      </div>
    </div>
  );
}

/* ———— Estrellas globales ———— */
function ParticlesGlobal() {
  // mezcla de estrellas cyan (cruces) y ámbar (puntos) dispersas
  const stars = [
    { x: "6%", y: "12%", t: "cross" },
    { x: "22%", y: "8%", t: "dot" },
    { x: "31%", y: "28%", t: "cross" },
    { x: "41%", y: "18%", t: "dot" },
    { x: "49%", y: "9%", t: "cross" },
    { x: "57%", y: "72%", t: "dot" },
    { x: "12%", y: "66%", t: "cross" },
    { x: "74%", y: "14%", t: "dot" },
    { x: "83%", y: "52%", t: "cross" },
    { x: "92%", y: "24%", t: "dot" },
    { x: "18%", y: "42%", t: "dot" },
    { x: "68%", y: "64%", t: "cross" },
  ];
  return (
    <>
      {stars.map((s, i) =>
        s.t === "cross" ? (
          <span
            key={`c-${i}`}
            className="absolute z-0 h-[7px] w-[7px] rotate-45 bg-cyan-300/90 twinkle-soft shadow-[0_0_10px_2px_rgba(120,220,255,.7)]"
            style={{ left: s.x, top: s.y }}
          />
        ) : (
          <span
            key={`d-${i}`}
            className="absolute z-0 h-[6px] w-[6px] rounded-full bg-amber-300 twinkle-dot shadow-[0_0_16px_6px_rgba(255,190,120,.45)]"
            style={{ left: s.x, top: s.y }}
          />
        )
      )}
    </>
  );
}

/* ———— Estrellas alrededor del personaje ———— */
function CharacterStars() {
  // coordenadas relativas al contenedor del personaje
  const ring = [
    { x: "12%", y: "18%" }, { x: "28%", y: "6%"  }, { x: "44%", y: "12%" },
    { x: "62%", y: "10%" }, { x: "78%", y: "22%" }, { x: "84%", y: "38%" },
    { x: "70%", y: "48%" }, { x: "54%", y: "40%" }, { x: "36%", y: "46%" },
    { x: "22%", y: "36%" }, { x: "14%", y: "28%" }
  ];
  const inner = [
    { x: "48%", y: "24%" }, { x: "60%", y: "28%" }, { x: "34%", y: "30%" },
    { x: "68%", y: "36%" }, { x: "40%", y: "38%" }
  ];
  return (
    <>
      {ring.map((p, i) => (
        <span
          key={`rc-${i}`}
          className="absolute z-0 h-[7px] w-[7px] rotate-45 bg-cyan-300/90 twinkle-soft shadow-[0_0_10px_2px_rgba(120,220,255,.7)]"
          style={{ left: p.x, top: p.y }}
        />
      ))}
      {inner.map((p, i) => (
        <span
          key={`ri-${i}`}
          className="absolute z-0 h-[5px] w-[5px] rounded-full bg-amber-300 twinkle-dot shadow-[0_0_14px_5px_rgba(255,180,110,.5)]"
          style={{ left: p.x, top: p.y }}
        />
      ))}
    </>
  );
}

/* ———— CSS in-file: animaciones y estilos ———— */
const cssAnimations = `
/* ===== Botón Ver más (outline, biseles, notch, hover sutil) ===== */
.vermas-btn{
  color:#eaeaea;
  background: transparent;
  position: relative;
  isolation:isolate;
  clip-path: polygon(0% 0%, 88% 0, 100% 22%, 100% 100%, 12% 100%, 0 78%);
}
.vermas-btn::before{
  content:"";
  position:absolute; inset:0;
  border:1px solid rgba(255,255,255,.88);
  border-radius:3px;
  transition:border-color .2s ease, box-shadow .2s ease;
}
.vermas-btn:hover::before{
  border-color:#fff;
  box-shadow:0 0 12px rgba(255,255,255,.15);
}
/* notch izquierdo y esquina derecha como en Figma */
.vermas-btn .ornament-left{
  position:absolute; left:10px; bottom:-8px;
  width:26px; height:14px; border-left:1px solid #fff; border-bottom:1px solid #fff;
  transform:skewX(-34deg);
}
.vermas-btn .ornament-right{
  position:absolute; right:10px; top:-10px;
  width:26px; height:14px; border-right:1px solid #fff; border-top:1px solid #fff;
  transform:skewX(-34deg);
}

/* ===== Estela: pulsos + rayos girando ===== */
.glow-pulse{ animation: glowPulse 6s ease-in-out infinite; }
.delay-2s{ animation-delay:2s !important; }
.delay-1s{ animation-delay:1s !important; }
.delay-3s{ animation-delay:3s !important; }

@keyframes glowPulse{
  0%,100%{ transform: scale(0.92); opacity:.8; filter: blur(1px); }
  50%{ transform: scale(1.04); opacity:1; filter: blur(2px); }
}

/* Rayos con conic-gradient + máscara radial para “picos” */
.rays-spin{
  --c1: rgba(255,170,90,.55);
  --c2: rgba(255,120,40,.0);
  position:absolute; inset:0; border-radius:9999px;
  background:
    conic-gradient(from 0deg,
      var(--c1) 0 4deg, var(--c2) 6deg 36deg,
      var(--c1) 38deg 42deg, var(--c2) 44deg 76deg,
      var(--c1) 78deg 82deg, var(--c2) 84deg 116deg,
      var(--c1) 118deg 122deg, var(--c2) 124deg 156deg,
      var(--c1) 158deg 162deg, var(--c2) 164deg 196deg,
      var(--c1) 198deg 202deg, var(--c2) 204deg 236deg,
      var(--c1) 238deg 242deg, var(--c2) 244deg 276deg,
      var(--c1) 278deg 282deg, var(--c2) 284deg 316deg,
      var(--c1) 318deg 322deg, var(--c2) 324deg 356deg
    );
  -webkit-mask: radial-gradient(circle, rgba(0,0,0,1) 0 62%, rgba(0,0,0,0) 68%);
          mask: radial-gradient(circle, rgba(0,0,0,1) 0 62%, rgba(0,0,0,0) 68%);
  animation: raysSpin 26s linear infinite, raysBreath 5.5s ease-in-out infinite;
  filter: blur(1px);
}
@keyframes raysSpin{ to{ transform: rotate(360deg); } }
@keyframes raysBreath{
  0%,100%{ transform: scale(1) rotate(0deg); opacity:.9; }
  50%{ transform: scale(1.06) rotate(0deg); opacity:1; }
}

/* Chispas con micro-pulso */
.spark{ animation: sparkPulse 2.8s ease-in-out infinite; box-shadow:0 0 16px 6px rgba(255,190,120,.55); }
@keyframes sparkPulse{
  0%,100%{ transform: translateY(0); opacity:.9; }
  50%{ transform: translateY(-2px); opacity:1; }
}

/* Estrellitas cyan (cruces) – pulso suave */
@keyframes twinkleSoft {
  0%, 100% { transform: rotate(45deg) scale(1);   opacity: .85; filter: drop-shadow(0 0 6px rgba(120,220,255,.45)); }
  50%      { transform: rotate(45deg) scale(1.14); opacity: 1;   filter: drop-shadow(0 0 10px rgba(120,220,255,.75)); }
}
.twinkle-soft { animation: twinkleSoft 3.4s ease-in-out infinite; }

/* Puntos ámbar – parpadeo rápido */
@keyframes twinkleDot {
  0%, 100% { transform: translateY(0) scale(1);   opacity: .8;  }
  50%      { transform: translateY(-1px) scale(1.18); opacity: 1; }
}
.twinkle-dot { animation: twinkleDot 2.6s ease-in-out infinite; }

/* Línea vertical con shimmer descendente */
.shimmer-line{
  background: linear-gradient(to bottom, rgba(255,255,255,.4), rgba(255,255,255,.08), transparent 85%);
  position:relative; overflow:hidden;
}
.shimmer-line::after{
  content:""; position:absolute; left:-2px; top:-20%;
  width:5px; height:40%;
  background: radial-gradient(ellipse at center, rgba(255,255,255,.9), rgba(255,255,255,.0) 70%);
  filter: blur(4px);
  animation: lineShimmer 3.8s ease-in-out infinite;
}
@keyframes lineShimmer{
  0%{ transform: translateY(-10%); opacity:.0; }
  10%{ opacity:.45; }
  60%{ transform: translateY(120%); opacity:.6; }
  100%{ transform: translateY(140%); opacity:0; }
}
`;

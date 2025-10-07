import React from "react";
import cuernos from "../../../images/cuernos.svg";

const CuernosSection: React.FC = () => {
  // cuánto se “sale” Cuernos por debajo (ajústalo a ojo)
  const spill = "180px";

  return (
    <section
      className="
  relative isolate text-white px-6 md:px-8 pt-16 md:pt-24 overflow-visible
  bg-[#0a0a0a]
  bg-[linear-gradient(180deg,#2a0000_0%,#0c0b0b_55%,#000000_100%),radial-gradient(1100px_720px_at_50%_0%,rgba(110,0,0,.22)_0%,transparent_70%)]
  bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,50%_0%]
"
      style={
        {
          // reserva espacio para el derrame: NO pisa la siguiente sección
          paddingBottom: `calc(6rem + ${spill})`,
          marginBottom: `calc(2rem + ${spill})`,
          // expone la variable para usarla dentro
          // @ts-ignore
          "--spill": spill,
        } as React.CSSProperties
      }
    >
      {/* grano */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.png')" }}
      />

      {/* cruces cyan (como en el home) */}
      <Diamond x="96%" y="22%" />
      <Diamond x="94%" y="90%" />
      <Diamond x="50%" y="52px" />

      {/* ===== CARD ANCHA ===== */}
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="relative h-[360px] md:h-[420px]">
          {/* borde blanco con centro difuso */}
          <div
            className="absolute inset-0 rounded-[2px] pointer-events-none"
            style={{
              background: `
                linear-gradient(to right, rgba(255,255,255,.95), rgba(255,255,255,.45), rgba(255,255,255,.95)) top    / 100% 1px no-repeat,
                linear-gradient(to right, rgba(255,255,255,.95), rgba(255,255,255,.45), rgba(255,255,255,.95)) bottom / 100% 1px no-repeat,
                linear-gradient(to bottom, rgba(255,255,255,.95), rgba(255,255,255,.45), rgba(255,255,255,.95)) left   / 1px 100% no-repeat,
                linear-gradient(to bottom, rgba(255,255,255,.95), rgba(255,255,255,.45), rgba(255,255,255,.95)) right  / 1px 100% no-repeat
              `,
            }}
          />

          {/* barras fuera del marco arriba-derecha */}
          <span className="absolute -right-8 top-10 hidden h-[2px] w-36 bg-white md:block" />
          <span className="absolute -right-8 top-14 hidden h-[2px] w-28 bg-white md:block" />

          {/* grid */}
          <div className="absolute inset-0 grid grid-cols-[1.05fr_.95fr]">
            {/* texto abajo-izq */}
            <div className="relative flex items-end">
              <div className="px-6 pb-10 md:px-5">
                <h3 className="font-cinzel text-[22px] md:text-[30px] font-extrabold leading-tight">
                    Sinópsis <br />
                </h3>
                <div className="mt-3 h-[2px] w-10 bg-white/85" />
                <p className="mt-6 max-w-[62ch] text-[13.5px] leading-relaxed text-zinc-300">
                  Traicionado por su iglesia y condenado al infierno bajo la acusación de cometer herejía le fue asignado la tarea divina de acabar con los pecados del mundo viéndose obligado a cruzar los 7 círculos del infierno. Ahora El Santo debe saber elegir entre cargar la culpa de la humanidad o culminar su plan de venganza.
                </p>
              </div>

              {/* línea vertical tenue al centro */}
              <span className="absolute left-1/2 top-[72px] hidden h-[150px] w-[1px] -translate-x-1/2 bg-gradient-to-b from-white/70 via-white/15 to-transparent md:block" />
            </div>

            {/* jefe */}
            <div className="relative overflow-visible">
              {/* halo y líneas detrás */}
              <div className="absolute right-10 top-6 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,175,110,.25)_0%,transparent_60%)] glow" />
              <div className="absolute inset-0 -right-6 hidden items-center justify-center md:flex">
                <div className="h-[86%] w-[1px] bg-white/22" />
                <div className="h-[76%] w-[1px] translate-x-10 bg-white/12" />
                <div className="h-[62%] w-[1px] -translate-x-10 bg-white/12" />
              </div>

              {/* chispas cálidas */}
              <Spark x="20%" y="24%" size={8} />
              <Spark x="32%" y="16%" size={10} />
              <Spark x="36%" y="36%" size={6} />

              {/* imagen: anclada a derecha y centrada vertical, con derrame controlado */}
              <img
                src={cuernos}
                alt="Cuernos"
                className="absolute right-[-32px] z-20 w-[560px] max-w-[84%] select-none drop-shadow-[0_30px_60px_rgba(0,0,0,.9)]"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  // se sale por debajo lo que indique --spill, pero la sección ya lo reserva
                  bottom: "calc(-1 * var(--spill))",
                }}
              />

              {/* segmentos del borde a la derecha */}
              <span className="pointer-events-none absolute -right-9 top-14 hidden h-[2px] w-32 bg-white md:block" />
              <span className="pointer-events-none absolute -right-9 -bottom-8 hidden h-[2px] w-28 bg-white md:block" />
            </div>
          </div>

          {/* difuminado interior suave para “adelgazar” el centro del borde */}
          <div className="absolute inset-0 rounded-[2px] bg-[radial-gradient(1100px_380px_at_50%_50%,rgba(255,255,255,.035),transparent_72%)]" />
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
};

export default CuernosSection;

/* helpers */
function Diamond({ x, y }: { x: string; y: string }) {
  return (
    <span
      className="absolute z-20 h-[8px] w-[8px] -translate-x-1/2 rotate-45 bg-cyan-300 shadow-[0_0_10px_2px_rgba(120,220,255,.6)]"
      style={{ left: x, top: y }}
    />
  );
}
function Spark({ x, y, size = 8 }: { x: string; y: string; size?: number }) {
  return (
    <span
      className="absolute rounded-full bg-amber-300 twinkle shadow-[0_0_16px_6px_rgba(255,190,120,.45)]"
      style={{ left: x, top: y, width: size, height: size }}
    />
  );
}

const css = `
.glow{ animation: glowPulse 6s ease-in-out infinite; filter: blur(1px); }
@keyframes glowPulse{ 0%,100%{ transform:scale(.96); opacity:.85; } 50%{ transform:scale(1.04); opacity:1; } }

@keyframes twinkle { 0%,100%{ transform:translateY(0) scale(1); opacity:.8 } 50%{ transform:translateY(-1px) scale(1.18); opacity:1 } }
.twinkle{ animation: twinkle 2.6s ease-in-out infinite; }
`;

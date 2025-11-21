import React from "react";
import ira from "../images/ira.jpg";

const News: React.FC = () => {
  return (
    // sección transparente: el bg lo pone el padre
    <section id="noticias"  className="
  relative isolate text-white px-6 md:px-8 pt-16 md:pt-24 overflow-visible
  bg-[#0a0a0a]
  bg-[linear-gradient(180deg,#2a0000_0%,#0c0b0b_55%,#000000_100%),radial-gradient(1100px_720px_at_50%_0%,rgba(110,0,0,.22)_0%,transparent_70%)]
  bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,50%_0%]
"
  >
          <div className="mx-auto max-w-6xl">
        {/* FRAME (borde blanco) */}
        <div className="relative">
          {/* borde blanco finísimo */}
          <span className="pointer-events-none absolute inset-0 rounded-[2px] ring-1 ring-white/85" />

          {/* contenido dentro del marco con padding */}
          <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_.9fr] px-5 md:px-7 py-6 md:py-8">
            {/* FADE oscuro a transparente hacia la derecha */}
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.55)_38%,rgba(0,0,0,.25)_60%,transparent_78%)]" />

            {/* ——— Columna izquierda ——— */}
            <div className="relative z-10">
              <h2 className="font-cinzel text-[22px] md:text-[24px] font-extrabold">
                últimas noticias
              </h2>

              <p className="mt-3 text-[12.5px] md:text-[13.5px] leading-relaxed text-zinc-300 max-w-[48ch]">
                Sigue nuestras redes sociales para enterarte de las nuevas
                actualizaciones, ver contenido exclusivo y compartir la emoción
                por <span className="text-[#e96666] font-semibold">Ex Tenebris</span> con la comunidad.
              </p>

              
              <div className="mt-6">
                <div className="grid grid-cols-3 gap-3 max-w-[240px]">
                  {[
                    { value: "02", label: "DAYS" },
                    { value: "23", label: "HOURS" },
                    { value: "48", label: "MINUTES" },
                  ].map((c, i) => (
                    <div key={i} className="text-center">
                      <div
                       className="
  relative py-10 md:py-16 px-6 text-white
  bg-[#0a0a0a]
  bg-[linear-gradient(180deg,#2a0000_0%,#0c0b0b_55%,#000000_100%),radial-gradient(1000px_520px_at_50%_0%,rgba(110,0,0,.22)_0%,transparent_65%)]
  bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,50%_0%]
"

                      >
                        <span className="block font-cinzel text-[20px] font-extrabold leading-none">
                          {c.value}
                        </span>
                      </div>
                      <span className="mt-1 block text-[9px] tracking-[.25em] text-zinc-400">
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón con notch */}
              <div className="mt-5">
                <button
                  className="
                    group relative inline-flex items-center
                    px-5 py-2 text-[11px] font-semibold uppercase tracking-[.2em]
                  "
                  style={{
                    clipPath:
                      "polygon(0% 0%, 88% 0, 100% 22%, 100% 100%, 12% 100%, 0 78%)",
                  }}
                >
                  {/* borde blanco */}
                  <span className="absolute inset-0 rounded-[2px] ring-1 ring-white/85 transition group-hover:ring-white" />
                  {/* notch / rayita interna */}
                  <span className="absolute left-2 top-1/2 h-[1px] w-6 -translate-y-1/2 bg-white/85" />
                  <span className="relative">Pre-ordenalo </span>
                </button>
              </div>
            </div>

            {/* ——— Columna derecha: imagen ——— */}
            <div className="relative z-10">
              <div className="relative overflow-hidden">
                <img
                  src={ira}
                  alt="Escenario infernal"
                  className="w-full h-[210px] md:h-[260px] object-cover"
                />
                {/* viñeta oscura y glow cálido de lava, como en el mock */}
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_85%_at_50%_50%,transparent_60%,rgba(0,0,0,.70)_100%)]" />
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_220px_at_68%_78%,rgba(255,120,60,.18),transparent_70%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

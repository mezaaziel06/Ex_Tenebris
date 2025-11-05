import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="
  relative text-white py-10 md:py-12
  bg-[#0a0a0a]
  bg-[linear-gradient(180deg,#000000_0%,#0a0a0a_55%,#2a0000_100%),radial-gradient(900px_520px_at_0%_100%,rgba(110,0,0,.25)_0%,transparent_60%)]
  bg-no-repeat bg-[length:100%_100%,auto] bg-[position:center,0%_100%]
"

    >
      <div className="mx-auto max-w-6xl px-6">
        {/* fila superior: logo - nav - redes */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* logo */}
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-3 w-3 rotate-45 bg-red-500" />
            <span className="font-extrabold tracking-wide font-cinzel text-sm md:text-base">
              Ex Tenebris
            </span>
          </div>

          {/* nav centrado */}
          <nav className="text-xs md:text-sm">
            <ul className="flex items-center gap-7 tracking-wide text-zinc-300">
              {["HOME", "GAMEPLAY"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          {/* redes */}
          <div className="flex items-center gap-3">
            <IconCircle label="Facebook" bg="#1877F2">
              {/* f */}
              <path
                d="M14 8h-2V7c0-.6.4-1 1-1h1V3h-2.2C9.7 3 8 4.7 8 6.8V8H6v3h2v6h3v-6h2l1-3z"
                fill="#fff"
              />
            </IconCircle>
            <IconCircle label="Twitter/X" bg="#1DA1F2">
              {/* ave simple */}
              <path
                d="M17.5 7.6c.4 5.6-3.9 9.4-8.5 9.4-1.7 0-3.3-.5-4.6-1.4 1.6.2 3.2-.3 4.5-1.3-1.3 0-2.4-.9-2.8-2.1.5.1 1 .1 1.5-.1-1.4-.3-2.4-1.5-2.4-3v-.1c.4.2.9.4 1.4.4C5 8.7 4.5 7.1 5.2 5.8c1.6 2 4 3.4 6.7 3.5-.5-2.1 2.2-3.3 3.6-1.9.6-.1 1.2-.3 1.7-.6-.2.6-.6 1.1-1.1 1.4.5-.1 1-.2 1.4-.4-.3.5-.8 1-1.3 1.3z"
                fill="#fff"
              />
            </IconCircle>
            <IconCircle label="YouTube" bg="#FF0000">
              {/* play */}
              <path d="M7 6h10c1 0 2 .8 2 1.8v4.4c0 1-.8 1.8-1.8 1.8H7.8C6.8 14 6 13.2 6 12.2V7.8C6 6.8 6.8 6 7.8 6z" fill="#fff" />
              <path d="M10 8l4 2-4 2V8z" fill="#FF0000" />
            </IconCircle>
            <IconCircle label="LinkedIn" bg="#0A66C2">
              {/* in */}
              <path d="M6.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM5 7h3v9H5V7zm5 0h2.8v1.2h.1c.4-.7 1.3-1.4 2.7-1.4C18.3 6.8 19 8.4 19 10.6V16h-3v-4.5c0-1.1-.4-1.9-1.3-1.9-.7 0-1.1.5-1.3 1.1 0 .2-.1.5-.1.8V16h-3V7z" fill="#fff" />
            </IconCircle>
          </div>
        </div>

        {/* línea fina luminosa */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/45 to-transparent" />

        {/* copyright */}
        <p className="mt-4 text-[11px] text-center text-zinc-300">
          © 2025 Ex Tenebris. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

/* ——— subcomponente para los iconos redondos ——— */
function IconCircle({
  children,
  bg,
  label,
}: {
  children: React.ReactNode;
  bg: string;
  label: string;
}) {
  return (
    <span
      title={label}
      className="
        inline-flex h-7 w-7 items-center justify-center rounded-full
        ring-1 ring-white/20 hover:ring-white/50 transition
        shadow-[0_0_10px_rgba(255,255,255,.08)]
      "
      style={{ backgroundColor: bg }}
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

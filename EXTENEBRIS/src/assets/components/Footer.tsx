import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-red-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Logo y derechos */}
        <div>
          <h3 className="font-cinzel text-xl mb-2 text-red-600">+ EX TENEBRIS</h3>
          <p className="text-zinc-400">© 2025 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

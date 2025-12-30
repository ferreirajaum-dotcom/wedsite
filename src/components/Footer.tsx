import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1120] border-t border-white/5 py-12 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-white font-bold text-lg">WeddingOS</span>
          <p className="mt-2">© 2024 WeddingOS Tecnologia LTDA. Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
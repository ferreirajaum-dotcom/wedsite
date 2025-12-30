import React, { useState } from 'react';
import { LayoutDashboard, FileText, Users, Calculator } from 'lucide-react';

const screenshots = [
  {
    id: 'dashboard',
    label: 'Painel Geral',
    icon: LayoutDashboard,
    title: 'Visão 360º do Casamento',
    description: 'Acompanhe orçamento, pagamentos e riscos em uma única tela.',
    image: 'https://i.postimg.cc/NMtKRtjk/Captura-de-Tela-2025-12-29-a-s-21-30-38.png'
  },
  {
    id: 'budget',
    label: 'Orçamento',
    icon: Calculator,
    title: 'Controle Financeiro Detalhado',
    description: 'Compare valores estimados vs. contratados e evite estouros.',
    image: 'https://i.postimg.cc/50JX8J27/Captura-de-Tela-2025-12-29-a-s-21-30-53.png'
  },
  {
    id: 'contracts',
    label: 'IA Contracts',
    icon: FileText,
    title: 'Inteligência Artificial Jurídica',
    description: 'Upload de contratos para análise automática de cláusulas e riscos.',
    image: 'https://i.postimg.cc/TwxKnx3s/Captura-de-Tela-2025-12-29-a-s-21-31-00.png'
  },
  {
    id: 'guests',
    label: 'Convidados',
    icon: Users,
    title: 'Gestão de Presença (RSVP)',
    description: 'Lista inteligente com status de confirmação e contagem em tempo real.',
    image: 'https://i.postimg.cc/Kzb1tb8V/Captura-de-Tela-2025-12-29-a-s-21-31-13.png'
  }
];

const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por dentro do <span className="text-brand-accent">WeddingOS</span>
          </h2>
          <p className="text-slate-400">
            Interface intuitiva, modo escuro nativo e projetado para alta performance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {screenshots.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-accent text-brand-dark shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                <Icon size={16} />
                {feature.label}
              </button>
            );
          })}
        </div>

        {/* Content Display */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative glass-card p-2 md:p-4 rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-fade-in">
             <div className="bg-[#0F172A] rounded-xl overflow-hidden relative aspect-video md:aspect-[16/9] lg:aspect-[21/9]">
                <img 
                  src={screenshots[activeTab].image} 
                  alt={screenshots[activeTab].title}
                  className="w-full h-full object-contain md:object-cover"
                />
                
                {/* Description Overlay (Mobile/Tablet friendly) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20 flex flex-col items-start justify-end pointer-events-none">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 rounded-full">
                    {screenshots[activeTab].label}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {screenshots[activeTab].title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base max-w-2xl">
                    {screenshots[activeTab].description}
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
import React from 'react';
import { ArrowRight, ShieldCheck, PieChart, CreditCard, Users } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import ScrollReveal from './ScrollReveal';

const data = [
  { name: 'Jan', gastos: 4000 },
  { name: 'Fev', gastos: 3000 },
  { name: 'Mar', gastos: 9000 },
  { name: 'Abr', gastos: 2780 },
  { name: 'Mai', gastos: 1890 },
  { name: 'Jun', gastos: 2390 },
  { name: 'Jul', gastos: 3490 },
];

const HeroSection: React.FC = () => {
  
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('precos');
    if (section) {
      const yOffset = -100; // Offset para compensar o header fixo
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-violet-900/20 via-cyan-900/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Sistema Financeiro de Casamento v2.0</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Seu casamento não precisa <br className="hidden md:block" />
            virar um <span className="gradient-text">caos financeiro</span>.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Controle cada real, cada contrato e cada convidado em um único sistema profissional. 
            <span className="block mt-2 text-slate-500 text-base">Sem planilhas. Sem esquecimentos. Sem surpresas desagradáveis.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
            <a 
              href="#precos" 
              onClick={scrollToPricing}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center cursor-pointer"
            >
              Organizar meu casamento agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all flex items-center justify-center">
              Ver demonstração
            </button>
          </div>
        </ScrollReveal>

        {/* Dashboard Mockup */}
        <ScrollReveal delay={0.4} className="w-full max-w-5xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-20 h-full w-full pointer-events-none md:h-1/2 md:top-1/2"></div>
          
          <div className="glass-card rounded-2xl p-1 md:p-2 shadow-2xl border-white/10 bg-[#0F172A] relative z-10 hover:scale-[1.01] transition-transform duration-700 ease-out-expo">
            {/* Fake Window Controls */}
            <div className="bg-brand-surface rounded-xl overflow-hidden border border-white/5">
              <div className="h-10 bg-[#1E293B] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 px-3 py-1 bg-black/20 rounded text-[10px] text-slate-500 font-mono">dashboard.weddingos.app</div>
              </div>

              {/* Fake UI Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
                {/* Sidebar */}
                <div className="hidden md:block md:col-span-2 space-y-4">
                  <div className="flex items-center gap-3 text-cyan-400 font-medium text-sm p-2 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
                    <PieChart size={16} /> Visão Geral
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 font-medium text-sm p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <CreditCard size={16} /> Pagamentos
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 font-medium text-sm p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <ShieldCheck size={16} /> Contratos
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 font-medium text-sm p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <Users size={16} /> Convidados
                  </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-10 space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#0B1120] border border-white/5">
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Orçamento Total</p>
                      <p className="text-xl font-bold text-white">R$ 120.000,00</p>
                      <div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 w-[65%] h-full"></div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0B1120] border border-white/5">
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Pago até agora</p>
                      <p className="text-xl font-bold text-brand-success">R$ 48.350,00</p>
                      <p className="text-xs text-slate-500 mt-1">40% do total</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0B1120] border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 opacity-10">
                        <ShieldCheck size={48} className="text-white" />
                      </div>
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Risco Contratual</p>
                      <p className="text-xl font-bold text-white">Baixo</p>
                      <p className="text-xs text-brand-success mt-1">0 cláusulas perigosas</p>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="p-5 rounded-xl bg-[#0B1120] border border-white/5 h-64">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-semibold text-white">Fluxo de Caixa Previsto</h3>
                      <span className="text-xs text-slate-500">Últimos 6 meses</span>
                    </div>
                    <ResponsiveContainer width="100%" height="80%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                          itemStyle={{ color: '#22D3EE' }}
                        />
                        <Area type="monotone" dataKey="gastos" stroke="#06B6D4" strokeWidth={2} fillOpacity={1} fill="url(#colorGastos)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
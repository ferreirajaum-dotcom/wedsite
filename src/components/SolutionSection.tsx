import React from 'react';
import { LayoutDashboard, CheckCircle2, TrendingUp, ShieldAlert } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SolutionSection: React.FC = () => {
  return (
    <section id="funcionalidades" className="pt-24 pb-12 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-brand-dark"></div>
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-surface to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            O WeddingOS é o sistema que organiza seu casamento <span className="text-brand-accent">como uma empresa</span>.
          </h2>
          <p className="text-slate-400 text-lg">
            Centralize orçamentos, contratos, pagamentos e convidados. Decisões baseadas em dados, não em palpites.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal delay={0.1} className="p-6 rounded-2xl bg-[#151E32] border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <LayoutDashboard className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Painel de Comando</h3>
            <p className="text-slate-400 text-sm">Visão 360º do seu evento. Saiba exatamente quanto já foi pago e quanto falta pagar.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="p-6 rounded-2xl bg-[#151E32] border border-white/5 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Controle de Pagamentos</h3>
            <p className="text-slate-400 text-sm">Alertas automáticos de vencimento. Nunca mais pague um centavo de multa.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="p-6 rounded-2xl bg-[#151E32] border border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Orçamento Inteligente</h3>
            <p className="text-slate-400 text-sm">Compare Orçado vs. Realizado em tempo real. Identifique gargalos antes que estourem.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="p-6 rounded-2xl bg-[#151E32] border border-white/5 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
              <ShieldAlert className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Gestão de Risco</h3>
            <p className="text-slate-400 text-sm">O sistema alerta se você está comprometendo muito do orçamento em uma única categoria.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
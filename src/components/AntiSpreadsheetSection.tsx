import React from 'react';
import { AlertTriangle, XCircle, FileWarning, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AntiSpreadsheetSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-block p-3 rounded-full bg-red-500/10 mb-6">
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Planilhas não avisam vencimentos.<br />
            Planilhas não leem contratos.
          </h2>
          
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            Planilhas não mostram riscos e definitivamente <span className="text-red-400 font-semibold border-b border-red-400/30 pb-0.5">não protegem seu dinheiro</span>.
            Você está confiando o dia mais importante da sua vida em células de Excel?
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
          <ScrollReveal delay={0.1} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors">
            <AlertTriangle className="w-6 h-6 text-red-400 mb-4" />
            <h3 className="font-semibold text-white mb-2">Sem Alertas</h3>
            <p className="text-sm text-slate-400">Esqueceu de abrir a planilha? Esqueceu de pagar. A multa chega sem avisar.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors">
            <FileWarning className="w-6 h-6 text-red-400 mb-4" />
            <h3 className="font-semibold text-white mb-2">Cegueira Contratual</h3>
            <p className="text-sm text-slate-400">Multas abusivas escondidas em PDFs que sua planilha ignora completamente.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors">
            <XCircle className="w-6 h-6 text-red-400 mb-4" />
            <h3 className="font-semibold text-white mb-2">Desorganização</h3>
            <p className="text-sm text-slate-400">Arquivos soltos, versões diferentes, conversas perdidas no WhatsApp.</p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <button className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors inline-flex items-center gap-2 group">
            Ver como funciona o WeddingOS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AntiSpreadsheetSection;
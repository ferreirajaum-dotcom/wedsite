import React from 'react';
import { Check, Gem, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  billedTotal?: string;
  savings?: string;
  fidelityText: string;
  highlight?: 'purple' | 'orange' | 'none'; // Purple = Mais Escolhido, Orange = Melhor Valor
  tagText?: string;
  ctaText?: string;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  description,
  price, 
  period, 
  features, 
  billedTotal,
  savings,
  fidelityText,
  highlight = 'none', 
  tagText,
  ctaText = "Selecionar Plano", 
  delay = 0 
}) => {
  
  // Configuração de cores e efeitos baseada no destaque
  const theme = {
    purple: {
      containerClasses: 'border-indigo-500/50 bg-[#151E32] shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:border-indigo-400 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] hover:-translate-y-2',
      tag: 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40',
      button: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] hover:brightness-110',
      check: 'text-indigo-400',
    },
    orange: {
      // Ajustado para ser mais Premium/Elite (Gold/Amber)
      containerClasses: 'border-amber-500/50 bg-gradient-to-b from-[#151E32] to-[#0F172A] shadow-[0_0_40px_rgba(245,158,11,0.15)] hover:border-amber-400 hover:shadow-[0_0_60px_rgba(245,158,11,0.4)] hover:-translate-y-1',
      tag: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/40 border border-white/20',
      button: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/60 hover:scale-[1.02] active:scale-[0.98] hover:brightness-110 text-lg',
      check: 'text-amber-400',
    },
    none: {
      containerClasses: 'border-white/5 bg-[#0F172A] hover:bg-[#151E32] hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl',
      tag: '',
      button: 'bg-[#1E293B] text-white hover:bg-[#28354D] border border-white/5 hover:border-white/20 active:scale-[0.98] transition-colors',
      check: 'text-blue-500',
    }
  };

  const styles = theme[highlight];

  return (
    <ScrollReveal delay={delay} className="h-full w-full">
      <div className={`relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-500 ease-out-expo h-full group ${styles.containerClasses}`}>
        
        {/* Tag Superior com animação suave */}
        {tagText && (
          <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-transform group-hover:scale-105 ${styles.tag}`}>
             {highlight === 'orange' && <Sparkles size={14} fill="white" />}
             {tagText}
          </div>
        )}

        {/* Header */}
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-200 transition-all">
            {title}
          </h3>
          <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors max-w-sm mx-auto">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-8 text-center bg-white/5 rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-colors">
          <div className="flex items-center justify-center gap-1 mb-2">
            <span className="text-lg text-slate-500 font-medium translate-y-[-8px]">R$</span>
            <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter">{price}</span>
            <span className="text-lg text-slate-500 self-end mb-2">{period}</span>
          </div>

          <p className="text-sm font-medium text-amber-400/90 tracking-wide uppercase">
            Preço fixo. Sem surpresas.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mb-8"></div>

        {/* Features */}
        <div className="flex-1 mb-10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Tudo incluído no pacote:</p>
          <ul className="space-y-4 max-w-md mx-auto">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4 text-base text-slate-300 group-hover:text-white transition-colors">
                <div className={`mt-1 p-0.5 rounded-full bg-white/5 ${styles.check.replace('text-', 'bg-').replace('400', '500/20')}`}>
                    <Check className={`w-4 h-4 ${styles.check}`} strokeWidth={3} />
                </div>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fidelity Section */}
        <div className="mb-8 text-center">
             <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-2">
                    <Check size={12} /> {fidelityText}
                </p>
             </div>
        </div>

        {/* CTA Button */}
        <button className={`w-full py-5 rounded-xl font-bold transition-all duration-300 shadow-xl ${styles.button}`}>
          {ctaText}
        </button>
        
        <p className="text-center text-xs text-slate-500 mt-4">
            Garantia de 7 dias ou seu dinheiro de volta.
        </p>
      </div>
    </ScrollReveal>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section id="precos" className="py-24 bg-[#0B1120] scroll-mt-32 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simplificamos tudo. <br/>Inclusive o preço.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Sem tabelas complexas, sem fidelidade e sem taxas escondidas. <br/>
            Apenas um plano completo para organizar o dia mais importante da sua vida.
          </p>
        </ScrollReveal>

        <div className="max-w-xl mx-auto">
          {/* Plano Único - Premium/Elite */}
          <PricingCard 
            title="WeddingOS Premium"
            description="Acesso ilimitado a todas as ferramentas de Inteligência Artificial e gestão financeira."
            price="39,99"
            period="/mês"
            fidelityText="Sem fidelidade. Cancele quando quiser."
            highlight="orange"
            tagText="ACESSO TOTAL • MELHOR VALOR"
            ctaText="COMEÇAR AGORA COM ACESSO TOTAL"
            features={[
              "Dashboard Financeiro Completo",
              "IA Leitora de Contratos Ilimitada",
              "Studio de Design com IA (Convites & Save the Date)",
              "Gestão de Convidados & RSVP Online",
              "Alertas de Vencimento (WhatsApp & Email)",
              "Exportação de Relatórios PDF & Excel",
              "Backup Automático na Nuvem",
              "Suporte Prioritário"
            ]}
            delay={0.2}
          />
        </div>
        
        <ScrollReveal delay={0.4} className="mt-16 text-center border-t border-white/5 pt-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                    <Gem className="w-4 h-4 text-slate-600" /> Compra Segura
                </span>
                <span className="hidden md:inline">•</span>
                <span>Renovação automática mensal</span>
                <span className="hidden md:inline">•</span>
                <span>Cancele a qualquer momento no painel</span>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;

import React from 'react';
import { Frown, Banknote, Clock, FileQuestion } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const PainPointsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-4">A Realidade</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O dinheiro desaparece e o estresse aumenta.
          </h3>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Organizar um casamento de alto nível envolve dezenas de fornecedores e contratos complexos.
            Sem um sistema central, você fica vulnerável a erros que custam caro.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                <Banknote className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Parcelas esquecidas e multas</h4>
                <p className="text-slate-400 text-sm">O juros de um atraso pode custar o buffet do chá de panela.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                <FileQuestion className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Multas escondidas em contratos</h4>
                <p className="text-slate-400 text-sm">Cláusulas abusivas que você assina sem ler direito e descobre tarde demais.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                <Clock className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Discussões por falta de organização</h4>
                <p className="text-slate-400 text-sm">"Eu achei que você tinha pago!" — A frase que nenhum casal quer ouvir.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl opacity-30"></div>
          <div className="glass-card p-8 rounded-2xl border-l-4 border-l-red-500 relative">
             <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                  <Frown size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Notificação de Atraso</p>
                  <p className="text-sm text-slate-400">Espaço Villa Real</p>
                </div>
                <span className="ml-auto text-xs text-slate-500">Há 2h</span>
             </div>
             <p className="text-slate-300 italic mb-4">
               "Prezados, não identificamos o pagamento da 4ª parcela que venceu na sexta-feira. Conforme contrato, incide multa de 10% + juros diários..."
             </p>
             <div className="bg-red-500/10 text-red-400 p-3 rounded text-sm font-semibold text-center border border-red-500/20">
               Custo do erro: R$ 1.250,00
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainPointsSection;
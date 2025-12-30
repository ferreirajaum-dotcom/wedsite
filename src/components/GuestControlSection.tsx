import React from 'react';
import { Users, Mail, CheckCircle, UploadCloud } from 'lucide-react';

const GuestControlSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Guest List UI Mockup */}
          <div className="bg-[#151E32] rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
            <div className="bg-[#1E293B] px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-semibold text-white">Lista de Convidados</h3>
              <span className="text-xs bg-brand-success/20 text-brand-success px-2 py-1 rounded">152 Confirmados</span>
            </div>
            <div className="divide-y divide-white/5">
              {[
                { name: 'Ana Silva', status: 'Confirmado', color: 'text-green-400' },
                { name: 'Carlos Santos', status: 'Pendente', color: 'text-yellow-400' },
                { name: 'Família Oliveira (4)', status: 'Não vai', color: 'text-red-400' },
                { name: 'Juliana Costa', status: 'Confirmado', color: 'text-green-400' },
              ].map((guest, i) => (
                <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">
                      {guest.name.charAt(0)}
                    </div>
                    <span className="text-slate-300 text-sm">{guest.name}</span>
                  </div>
                  <span className={`text-xs font-medium ${guest.color}`}>{guest.status}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-[#1E293B]/50 text-center">
              <button className="text-xs text-brand-accent font-medium hover:underline">Ver lista completa</button>
            </div>
          </div>
          
          {/* Floating Element */}
          <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-lg border border-brand-accent/30 animate-bounce delay-1000 duration-[3000ms]">
            <div className="flex items-center gap-3">
               <div className="bg-green-500/20 p-2 rounded-full">
                 <CheckCircle className="w-5 h-5 text-green-500" />
               </div>
               <div>
                 <p className="text-white text-sm font-bold">RSVP Atualizado</p>
                 <p className="text-slate-400 text-xs">Novo confirmado agora</p>
               </div>
            </div>
          </div>
        </div>

        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-6">
            <Users className="w-4 h-4 text-brand-accent" />
            <span className="text-xs font-bold text-brand-accent tracking-wide uppercase">Controle Total</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Menos confusão. <br/><span className="gradient-text">Mais controle.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Dê adeus à lista de papel riscada. Gerencie confirmações em tempo real e saiba exatamente quantos pratos você vai pagar.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <UploadCloud className="w-6 h-6 text-brand-accent mt-1" />
              <div>
                <h4 className="text-white font-semibold">Importação Excel</h4>
                <p className="text-sm text-slate-400">Traga sua lista atual em segundos.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-brand-accent mt-1" />
              <div>
                <h4 className="text-white font-semibold">Envio de Save the Date</h4>
                <p className="text-sm text-slate-400">Dispare convites direto da plataforma.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestControlSection;
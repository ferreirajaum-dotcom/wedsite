import React from 'react';
import { FileText, Search, ShieldCheck, Zap } from 'lucide-react';

const AIContractSection: React.FC = () => {
  return (
    <section id="ia" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#0B1120] relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Zap className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-bold text-violet-300 tracking-wide uppercase">Diferencial Exclusivo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contratos que se <span className="text-violet-400">explicam sozinhos</span>.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Nossa IA jurídica lê seus contratos automaticamente, extrai valores, prazos e alerta sobre multas abusivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#151E32]/50 backdrop-blur border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-violet-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <FileText size={80} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Leitura Automática</h3>
            <p className="text-slate-400 leading-relaxed">
              Basta fazer o upload do PDF. O sistema identifica fornecedor, valores e datas de vencimento em segundos.
            </p>
          </div>

          <div className="bg-[#151E32]/50 backdrop-blur border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-violet-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Search size={80} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Extração de Prazos</h3>
            <p className="text-slate-400 leading-relaxed">
              Nunca mais perca a data limite para cancelar ou alterar o número de convidados sem multa.
            </p>
          </div>

          <div className="bg-[#151E32]/50 backdrop-blur border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-violet-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={80} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Radar de Riscos</h3>
            <p className="text-slate-400 leading-relaxed">
              A IA destaca cláusulas perigosas, multas acima do mercado e condições desfavoráveis.
            </p>
          </div>
        </div>

        {/* Demo AI Analysis Card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-[#0f172a] border border-violet-500/20 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-violet-500 flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="text-violet-400 font-mono text-sm">Análise de IA concluída</span>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-red-500/10 border-l-2 border-red-500 rounded-r text-sm text-slate-300">
                <strong className="text-red-400 block mb-1">Atenção: Cláusula de Cancelamento</strong>
                O contrato prevê retenção de 50% do valor total mesmo se cancelado com 6 meses de antecedência. (Acima da média de mercado de 20%)
              </div>
              <div className="p-3 bg-green-500/10 border-l-2 border-green-500 rounded-r text-sm text-slate-300">
                <strong className="text-green-400 block mb-1">Ponto Positivo</strong>
                Sem cobrança extra para hora adicional se avisado com 2h de antecedência.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIContractSection;
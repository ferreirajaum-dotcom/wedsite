import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const budgetData = [
  { name: 'Buffet', val: 45000 },
  { name: 'Decoração', val: 25000 },
  { name: 'Foto/Video', val: 18000 },
  { name: 'Local', val: 15000 },
  { name: 'Música', val: 12000 },
];

const VisualDemoSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6">
              Orçamento detalhado.<br />
              <span className="text-brand-accent">Sem surpresas no final.</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Acompanhe cada categoria de gasto. O WeddingOS categoriza automaticamente e gera gráficos que mostram exatamente para onde seu dinheiro está indo.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                Categorização automática de fornecedores
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                Alertas de estouro de budget por categoria
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                Projeção de gastos finais
              </li>
            </ul>
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2">
            <div className="glass-card p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h4 className="text-white font-semibold">Distribuição de Budget</h4>
                  <p className="text-xs text-slate-500">Top 5 categorias de gasto</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Total Planejado</p>
                  <p className="text-lg font-bold text-white">R$ 115.000,00</p>
                </div>
              </div>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={budgetData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="val" radius={[0, 4, 4, 0]} barSize={20}>
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#06B6D4' : '#334155'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Labels manually placed for better control in this mockup */}
              <div className="mt-4 space-y-3">
                {budgetData.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">{item.name}</span>
                    <span className="text-white font-mono">R$ {item.val.toLocaleString('pt-BR')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualDemoSection;
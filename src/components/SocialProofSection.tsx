import React from 'react';
import { Star, Lock, ShieldCheck, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana & Pedro",
    role: "Casam em Dez/2024",
    image: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80&w=100&h=100",
    text: "A IA de contratos salvou a gente de uma multa de 30% que estava escondida no contrato do fotógrafo. Só isso já pagou a anuidade do sistema.",
    stars: 5
  },
  {
    name: "Lucas & Beatriz",
    role: "Casaram em Jan/2024",
    image: "https://images.unsplash.com/photo-1519744531200-c1115e416d74?auto=format&fit=crop&q=80&w=100&h=100",
    text: "Eu achava que minha planilha era organizada até ver o dashboard do WeddingOS. Ter o controle do que já foi pago e o que falta mudou minha ansiedade.",
    stars: 5
  },
  {
    name: "Carolina & Thiago",
    role: "Casam em Set/2025",
    image: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?auto=format&fit=crop&q=80&w=100&h=100",
    text: "O sistema de RSVP é viciante. Ver as confirmações chegando em tempo real e já caindo no orçamento de buffet automaticamente é genial.",
    stars: 5
  },
  {
    name: "Gabriela & Matheus",
    role: "Casam em Mar/2025",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    text: "Centralizar a comunicação com fornecedores e os pagamentos em um lugar só evitou muita briga. O WeddingOS trouxe paz pro nosso noivado.",
    stars: 5
  }
];

const SocialProofSection: React.FC = () => {
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
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0F172A] to-[#0F172A] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Featured Testimonial (Hero) */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
             <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
             <span className="text-xs font-bold text-amber-400 tracking-wide uppercase">História em Destaque</span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-medium text-white italic leading-relaxed mb-8 relative">
            <Quote className="absolute -top-8 -left-8 text-white/5 w-16 h-16 rotate-180" />
            "Economizamos mais de R$ 8.000 só evitando erros e multas que o sistema identificou no contrato do buffet. O WeddingOS se pagou no primeiro mês."
            <Quote className="absolute -bottom-8 -right-8 text-white/5 w-16 h-16" />
          </h3>
          
          <div className="flex items-center justify-center gap-4">
             <div className="w-14 h-14 rounded-full border-2 border-brand-accent/30 p-1">
                <img src="https://images.unsplash.com/photo-1533038676643-d34c67924c74?auto=format&fit=crop&q=80&w=100&h=100" alt="Fernanda" className="w-full h-full object-cover rounded-full" />
             </div>
             <div className="text-left">
                <p className="text-white font-bold text-lg">Fernanda & Ricardo</p>
                <p className="text-sm text-slate-400">Casaram em Out/2023</p>
             </div>
          </div>
        </div>

        {/* Marquee Scrolling Section */}
        <div className="mb-24 relative">
            {/* Gradient Masks for smooth fade in/out */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F172A] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F172A] to-transparent z-20 pointer-events-none"></div>

            <div className="flex overflow-hidden group">
                <div className="flex animate-scroll gap-6 pause-on-hover py-4">
                    {/* Render list twice for seamless infinite scroll */}
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="flex-shrink-0 w-[350px] md:w-[400px]">
                            <div className="bg-[#151E32] p-6 rounded-2xl border border-white/5 h-full hover:border-white/10 transition-colors shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.stars)].map((_, idx) => (
                                        <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed min-h-[80px]">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-slate-800" />
                                    <div>
                                        <p className="text-white font-semibold text-sm">{t.name}</p>
                                        <p className="text-slate-500 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Final CTA */}
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Você cuida do amor.<br/>
            O WeddingOS cuida de <span className="text-brand-accent">todo o resto</span>.
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href="#precos"
              onClick={scrollToPricing}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xl shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] inline-block cursor-pointer"
            >
              👉 Começar agora com controle total
            </a>
            
            <div className="flex items-center gap-6 text-sm text-slate-400 mt-4">
               <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-brand-success" /> Dados Protegidos</span>
               <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-success" /> Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
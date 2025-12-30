import React from 'react';
import { Check, Gem } from 'lucide-react';
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

  // ✅ NOVO: link do checkout do Mercado Pago
  checkoutUrl: string;
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
  ctaText = 'Selecionar Plano',
  delay = 0,
  checkoutUrl,
}) => {
  // Configuração de cores e efeitos baseada no destaque
  const theme = {
    purple: {
      // Container: Glow inicial suave -> Glow intenso e levitação no hover
      containerClasses:
        'border-indigo-500/50 bg-[#151E32] shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:border-indigo-400 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] hover:-translate-y-2',
      tag: 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40',
      // Botão: Gradiente com brilho, escala no hover, clique responsivo
      button:
        'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] hover:brightness-110',
      check: 'text-indigo-400',
    },
    orange: {
      containerClasses:
        'border-amber-500/50 bg-[#151E32] shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:border-amber-400 hover:shadow-[0_0_50px_rgba(245,158,11,0.3)] hover:-translate-y-2',
      tag: 'bg-amber-500 text-black shadow-lg shadow-amber-500/40',
      button:
        'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] hover:brightness-110',
      check: 'text-amber-400',
    },
    none: {
      // Container: Escuro -> Levemente mais claro e sutilmente elevado no hover
      containerClasses:
        'border-white/5 bg-[#0F172A] hover:bg-[#151E32] hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl',
      tag: '',
      button:
        'bg-[#1E293B] text-white hover:bg-[#28354D] border border-white/5 hover:border-white/20 active:scale-[0.98] transition-colors',
      check: 'text-blue-500',
    },
  };

  const styles = theme[highlight];

  const handleCheckout = () => {
    // ✅ Redireciona pro checkout do Mercado Pago do plano selecionado
    window.location.href = checkoutUrl;
  };

  return (
    <ScrollReveal delay={delay} className="h-full">
      <div
        className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-500 ease-out-expo h-full group ${styles.containerClasses}`}
      >
        {/* Tag Superior com animação suave */}
        {tagText && (
          <div
            className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-transform group-hover:scale-105 ${styles.tag}`}
          >
            {highlight === 'orange' && <Gem size={12} strokeWidth={3} />}
            {tagText}
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
            {title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed min-h-[60px] group-hover:text-slate-300 transition-colors">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-slate-500 font-medium">R$</span>
            <span className="text-5xl font-bold text-white tracking-tight">{price}</span>
            <span className="text-sm text-slate-500">{period}</span>
          </div>

          {/* Billed/Savings Block */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 min-h-[34px]">
            {billedTotal ? (
              <div className="text-[10px] text-slate-400 font-semibold tracking-wide">
                FATURADO: <span className="text-white">R$ {billedTotal}</span>
              </div>
            ) : (
              <div className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase">
                Cobrança mensal recorrente
              </div>
            )}

            {savings && (
              <div className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                Economia de R$ {savings}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full mb-6 group-hover:bg-white/10 transition-colors"></div>

        {/* Fidelity Section */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
            Fidelidade do Plano
          </p>
          <p className="text-sm text-slate-300 font-medium">{fidelityText}</p>
        </div>

        {/* Features */}
        <div className="flex-1 mb-8">
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-slate-200 transition-colors"
              >
                <Check
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110 ${styles.check}`}
                />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCheckout}
          className={`w-full py-3.5 rounded-lg font-bold text-sm transition-all duration-300 ${styles.button}`}
        >
          {ctaText}
        </button>
      </div>
    </ScrollReveal>
  );
};

const PricingSection: React.FC = () => {
  // ✅ Links Mercado Pago (planos de assinatura)
  const CHECKOUT = {
    mensal:
      'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=18c3308690f443d595009284c808e6e7',
    trimestral:
      'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=96e636074cdc412682967e1ec78694b8',
    semestral:
      'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=e7d00d93cbed45c6bc90557fbc877bd5',
    anual:
      'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=9fb39992b890484a9c1afb3069ab8bde',
  };

  return (
    <section id="precos" className="py-24 bg-[#0B1120] scroll-mt-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Invista na sua tranquilidade</h2>
          <p className="text-slate-400">Escolha o plano ideal para o estágio do seu casamento.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {/* Plano Mensal */}
          <PricingCard
            title="Mensal Flex"
            description="Acesso total e imediato. Ideal para resolver pendências pontuais ou testar sem compromisso."
            price="59,99"
            period="/mês"
            fidelityText="Sem fidelidade. Cancele quando quiser."
            highlight="none"
            features={[
              'Acesso completo ao Dashboard',
              'IA Leitora de Contratos Ilimitada',
              'Studio de Design com IA',
              'Importação de Convidados (Excel)',
            ]}
            delay={0.1}
            checkoutUrl={CHECKOUT.mensal}
          />

          {/* Plano Trimestral */}
          <PricingCard
            title="Trimestral Smart"
            description="Tempo perfeito para organizar uma etapa completa (ex: fechar buffet e local)."
            price="53,30"
            period="/mês"
            billedTotal="159,90"
            savings="20,00"
            fidelityText="Renovação a cada 3 meses."
            highlight="purple"
            tagText="MAIS ESCOLHIDO"
            features={[
              'Tudo incluído no plano Mensal',
              'Ideal para a fase de contratações',
              'Exportação de Relatórios PDF',
              'Backup de dados na nuvem',
            ]}
            delay={0.2}
            checkoutUrl={CHECKOUT.trimestral}
          />

          {/* Plano Semestral */}
          <PricingCard
            title="Semestral Pro"
            description="Para quem já tem data marcada e precisa controlar o fluxo de pagamentos mês a mês."
            price="49,98"
            period="/mês"
            billedTotal="299,90"
            savings="59,00"
            fidelityText="Renovação a cada 6 meses."
            highlight="none"
            features={[
              'Tudo incluído no plano Mensal',
              'Foco em controle de parcelas',
              'Consistência no planejamento',
              'Maior economia a médio prazo',
            ]}
            delay={0.3}
            checkoutUrl={CHECKOUT.semestral}
          />

          {/* Plano Anual */}
          <PricingCard
            title="Anual Elite"
            description="A escolha mais inteligente. Cubra todo o período do noivado até a lua de mel."
            price="44,99"
            period="/mês"
            billedTotal="539,90"
            savings="180,00"
            fidelityText="Ciclo único de 12 meses."
            highlight="orange"
            tagText="MELHOR VALOR"
            features={[
              'Menor valor mensal garantido',
              'Cobertura de ponta a ponta',
              'Pagamento único anual',
              'Acesso irrestrito a todas as IAs',
            ]}
            delay={0.4}
            checkoutUrl={CHECKOUT.anual}
          />
        </div>

        <ScrollReveal delay={0.6} className="mt-16 text-center border-t border-white/5 pt-8">
          <p className="text-sm text-slate-500">
            Pagamento via Cartão de Crédito ou PIX. Renovação automática com aviso prévio por e-mail 7 dias antes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;

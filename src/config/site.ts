// Dados do site num lugar só. Campos vazios aparecem como [COLCHETES] na página.

export const site = {
  name: 'Dakar Digital',
  // Domínio definitivo. Trocar quando o domínio for registrado.
  url: 'https://dakardigital.com.br',
  title: 'Dakar Digital — Mais clientes na sua agenda',
  description:
    'A Dakar Digital monta toda a estrutura digital que transforma quem ainda não conhece sua empresa em cliente atendido, pago e na agenda.',

  // WhatsApp só com números: DDI + DDD + número. Ex.: 5511999999999
  whatsapp: '',
  // Como o número aparece escrito na página. Ex.: (11) 99999-9999
  whatsappDisplay: '',
  email: '',
  cnpj: '',

  prices: {
    presenca: '',
    captacao: '',
    operacao: '',
  },

  analytics: {
    // Cloudflare Web Analytics: não usa cookies, não exige aviso.
    cloudflareToken: '',
    // Pixel da Meta: usa cookies; só carrega depois que a pessoa aceita no aviso.
    metaPixelId: '',
  },
};

export const fill = (value: string, placeholder: string) => value || `[${placeholder}]`;

export const whatsappHref = (message: string) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}` : '#contato';

export const hasTracking = Boolean(site.analytics.metaPixelId);

// Links do WhatsApp abrem em nova aba; sem número, apontam para a seção de contato.
export const whatsappAttrs = site.whatsapp ? { target: '_blank', rel: 'noopener' } : {};

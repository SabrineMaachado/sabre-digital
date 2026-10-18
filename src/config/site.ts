// Dados do site num lugar só. Campos vazios aparecem como [COLCHETES] na página.

export const site = {
  name: 'Dakar Digital',
  // Domínio oficial (ligado ao Cloudflare). Usado no Google, no sitemap e nas prévias de compartilhamento.
  url: 'https://dakardigital.com.br',
  title: 'Dakar Digital — Mais clientes na sua agenda',
  description:
    'A Dakar monta e cuida do caminho que leva alguém do primeiro clique até o horário marcado. Você só precisa atender.',

  // WhatsApp só com números: DDI + DDD + número. Ex.: 5511999999999
  whatsapp: '5511981033872',
  // Como o número aparece escrito na página. Ex.: (11) 99999-9999
  whatsappDisplay: '(11) 98103-3872',
  email: '',
  cnpj: '',

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

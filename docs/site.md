# Site — Dakar Digital

Site em **Astro** (gera HTML e CSS estáticos, leves) hospedado no **Cloudflare Pages** (gratuito, uso comercial permitido).

## Onde fica cada coisa

| Caminho | O que é |
|---|---|
| `src/config/site.ts` | **Dados para preencher**: WhatsApp, e-mail, CNPJ, domínio, medição |
| `src/pages/index.astro` | A landing (textos e seções) |
| `src/pages/politica-de-privacidade.astro` | Política de privacidade (LGPD) |
| `src/styles/site.css` | Estilos da landing, todos usando as variáveis do design system |
| `design-system/tokens.css` | Fonte única de cores, espaços, cantos, sombras e fontes |
| `public/` | Favicon, imagem de compartilhamento (`og.png`) e cabeçalhos de segurança/cache |

## Preencher os dados

Abra `src/config/site.ts` e preencha. Enquanto um campo estiver vazio, a página mostra o texto entre colchetes do layout aprovado (ex.: `[CNPJ]`). Sem número de WhatsApp, os botões levam para a seção de contato.

- `whatsapp`: só números, com 55 e DDD. Ex.: `5511999999999`
- `whatsappDisplay`: como aparece escrito. Ex.: `(11) 99999-9999`
- `email`, `cnpj`
- `url`: o domínio definitivo, quando for registrado

## Medição e cookies

- **Cloudflare Web Analytics** (`analytics.cloudflareToken`): conta visitas sem cookies, não precisa de aviso.
- **Pixel da Meta** (`analytics.metaPixelId`): usa cookies. Quando preenchido, o site mostra o aviso de cookies e só carrega o pixel depois do "Aceitar". A política de privacidade se ajusta sozinha ao que estiver ligado.

## Publicar no Cloudflare (uma vez)

1. Crie uma conta gratuita em [dash.cloudflare.com](https://dash.cloudflare.com).
2. **Workers & Pages → Create → Import a repository** e autorize o GitHub.
3. Escolha o repositório deste projeto e preencha:
   - Project name: `dakar-digital` (igual ao `name` do `wrangler.jsonc`)
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Preview command: deixe o que vier preenchido
4. Clique em **Deploy**. O site fica em `dakar-digital.<sua-conta>.workers.dev`.

A configuração de publicação está em `wrangler.jsonc` (serve a pasta `dist/` e usa a página 404 do site).

Depois disso, cada alteração enviada para a branch `main` publica sozinha. Outras branches geram um link de prévia.

## Conectar o domínio do registro.br

1. No Cloudflare: **Add a domain** → digite o domínio → plano **Free**. Ele mostra dois *nameservers*.
2. No registro.br: no domínio, **Alterar servidores DNS** → cole os dois nameservers do Cloudflare.
3. De volta ao projeto no Pages: **Custom domains → Set up a domain**.
4. A propagação leva de minutos a algumas horas. O HTTPS é automático.

## Rodar no computador (opcional)

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera a versão final em dist/
```

## Qualidade verificada

- Visual igual ao protótipo aprovado (`index.html` de 16/10/2026) na comparação pixel a pixel no computador e no celular, exceto o logo do menu (aguardando o SVG definitivo) e o ícone do WhatsApp (glifo oficial).
- Lighthouse: celular 99 de desempenho, computador 100; acessibilidade, boas práticas e SEO 100 nos dois.
- Luz na borda só em "Falar com especialista", "Falar com a Dakar" e no card Operação completa.
- Barras do relatório começam a crescer quando a seção aparece na tela.
- Perguntas frequentes com `<details>`, acessíveis pelo teclado, e marcação `FAQPage` para o Google.
- Luzes desfocadas paradas no celular e em telas de toque; tudo parado com "reduzir movimento".

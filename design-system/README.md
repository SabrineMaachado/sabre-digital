# Dakar Digital

Design system da Dakar Digital, agência 360 de design, marketing e tecnologia. A Dakar monta para empresas toda a estrutura digital que transforma um desconhecido em cliente atendido, pago e com horário marcado. Este sistema é a base para a landing page e para tudo o que a marca publicar.

**A ideia visual em uma frase:** o laranja é luz, não tinta. Ele flutua desfocado sobre o grafite ou a névoa e corre pela borda dos botões. Títulos finos, muito espaço, movimento lento.

## Como usar na landing page

1. Carregue as fontes Sora, Manrope e IBM Plex Mono. No site elas vêm dos pacotes `@fontsource` (servidas pelo próprio domínio, sem Google Fonts).
2. Carregue `tokens.css` e depois `components.css`. O site em `src/` usa só `tokens.css`; os estilos da landing estão em `src/styles/site.css`.
3. Coloque `class="dk"` no `<body>` e use as classes `dk-*` dos componentes. Não há JavaScript: tudo é HTML e CSS.
4. Seções escuras usam o tema **Grafite** (`data-theme="dark"`), seções claras o tema **Névoa** (`data-theme="light"`). Alternar os dois ao longo da página dá ritmo, como numa landing de referência: hero escuro, dores claras, motor escuro, ofertas claras, fechamento escuro.

## Voz

- **Resultado, não entregável.** Falamos do caminho até o cliente chegar, não de "posts" ou "anúncios" soltos.
- **Direto e calmo.** Frases curtas, sem urgência artificial, sem jargão. Se um termo técnico aparecer, explicamos na hora.
- **O dono é quem atende bem.** A Dakar cuida da operação; o cliente da Dakar foca no próprio ofício.
- **Transparência.** Dizemos o que está incluso e o que não está, e sempre avisamos quando é um robô falando.
- **Cuidado com dados.** Tudo segue a LGPD, e toda automação é testada primeiro na própria Dakar.

Frases-base: "Do desconhecido ao cliente com horário marcado." · "Não entregamos só posts. Entregamos o caminho até o cliente chegar." · "Enquanto a Dakar cuida da operação, o dono foca em atender bem."

## Logotipo

O logotipo é tipográfico: **Dakar** em Sora 300, com D maiúsculo, inclinado −9° (`skewX(-9deg)`), espaçamento −0.06em. Abaixo, opcionalmente, **DIGITAL** em IBM Plex Mono 300, espaçamento 0.86em, em `orange-text`. Ainda não há arquivo vetorial do logo: use o componente **Wordmark** até a versão final em SVG.

- Sobre grafite: texto `mist`.
- Sobre névoa ou areia: texto `graphite`.
- Sobre laranja: texto `graphite`.
- Não aplicar degradê no nome, não contornar, não adicionar ponto ou símbolo, não usar caixa toda alta.

## Cor

| Token | Papel |
| --- | --- |
| `bg` | Fundo: grafite #141416 no tema escuro, névoa #F4F3F0 no claro |
| `ink` / `ink-muted` | Texto principal e de apoio |
| `orange` #F5660D | Luz e ação. Nunca em áreas grandes chapadas |
| `orange-light` / `orange-soft` / `orange-deep` | Degradê do botão e da palavra em destaque |
| `orange-text` | Laranja para texto pequeno, legível nos dois temas |
| `space-gray` #4A4D54 | Estrutura e profundidade |
| `sand` #EDE6DA | Respiro quente em seções claras |

Proporção de uso: grafite 35%, névoa 30%, cinza espacial 15%, areia 10%, laranja 10%.

**A ligação entre laranja e preto acontece pela luz:** manchas laranja desfocadas (componente **GlassLight**) que flutuam devagar sobre o grafite. Nunca faça uma faixa de degradê linear laranja → cinza → preto. O único degradê sólido é dentro da família laranja (`orange-light` → `orange` → `orange-deep`, 145°), usado no botão principal e em uma palavra de destaque por título.

No botão principal, o texto sobre o laranja é branco (`on-orange`), sempre em 19px negrito ou maior. Texto pequeno sobre laranja usa `graphite`.

## Tipografia

- **Sora** (`--font-display`) nos títulos, em pesos finos: 200 para títulos, 300 para títulos de card e para a palavra em destaque. Espaçamento negativo (−0.055em nos grandes).
- **Manrope** (`--font-body`) nos textos, 400; 700 só em botões e em uma expressão sublinhada de laranja por parágrafo.
- **IBM Plex Mono** (`--font-mono`) 300, em caixa alta e espaçada, para rótulos, números de etapa e dados.

Em cada título, no máximo uma expressão em destaque, com a classe `dk-accent`.

## Espaço e forma

Cantos generosos: `radius-lg` (34px) nos cards, `radius-xl` (48px) no bloco de fechamento, `radius-pill` em botões, pílulas e header flutuante. Seções com `space-9` (120px) de respiro vertical no desktop. Bordas sempre finas (1px, `line`), sombras longas e suaves (`shadow-soft` no claro, `shadow-deep` no escuro).

## Movimento

Lento, contínuo e discreto. Nada pisca rápido.

| Movimento | Onde | Tempo |
| --- | --- | --- |
| Luzes que flutuam | Fundos (GlassLight) | 18s, 23s e 20s, ida e volta |
| Luz na borda | Botões principal e secundário | 3.2s por volta (1.8s no hover) |
| Trilha do motor | Ponto percorrendo as 5 etapas | 7s |
| Entrada | Blocos ao aparecer | 0.75s, atraso de 0.08s entre irmãos |

No celular e em telas de toque as luzes param de se mover. Com "reduzir movimento" ativado, tudo fica parado.

## Componentes

- **Wordmark**: o logotipo.
- **Button**: principal laranja com texto branco e secundário transparente com borda laranja, os dois com luz percorrendo a borda.
- **GlassLight**: o fundo com luzes laranja desfocadas.
- **Card**: card de vidro e card de destaque (oferta Operação completa).
- **Motor**: trilha com o ponto viajante e os cards das 5 etapas (Atrair, Atender, Qualificar, Receber, Agendar).
- **BotBadge**: selo de transparência do robô e pílulas.

## Estrutura sugerida da landing

1. Hero escuro com luzes: "Do desconhecido ao cliente com horário marcado." e o botão principal.
2. Presença (a base), em seção clara.
3. O motor de clientes, em seção escura com a trilha.
4. Acompanhamento mensal.
5. Ofertas: Presença, Captação, Operação completa (destaque).
6. Princípios, com o selo do robô.
7. Fechamento em bloco `radius-xl` com o botão principal.

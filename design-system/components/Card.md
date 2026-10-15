# Card

Card de vidro para ofertas, dores e diferenciais, e a variante de destaque em grafite com borda laranja.

- `.dk-card`: vidro (`surface-glass` + desfoque de 16px), borda `line`, canto `radius-lg`, sombra `shadow-soft`. Sobe 6px no hover.
- `.dk-card--featured`: fundo `graphite` fixo nos dois temas, borda `orange` e uma luz laranja flutuando no canto. Use em **um** card por grupo, como a oferta Operação completa.
- Partes: `.dk-eyebrow` (rótulo), `.dk-card__title`, `.dk-card__text` e `.dk-card__foot` (rodapé em mono, empurrado para baixo para alinhar cards lado a lado).
- Em grade, use `display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-4)` para empilhar no celular.

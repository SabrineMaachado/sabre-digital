# Motor

O motor de clientes: uma trilha fina com um ponto de luz que percorre as 5 etapas, sobre uma lista de cards (Atrair, Atender, Qualificar, Receber, Agendar).

- `.dk-track` fica acima da grade. Os nós (`.dk-track__node`) vão em `left: 0%, 25%, 50%, 75%, 100%`; o ponto (`.dk-track__dot`) e o rastro (`.dk-track__trail`) correm a trilha em 7s.
- A trilha tem `margin: 0 10%` para os nós caírem no centro de 5 colunas. Em menos colunas, esconda a trilha (`display: none`) no celular.
- Cada etapa é um `<li class="dk-stage">` dentro de `<ol class="dk-stages">`: número, nome, objetivo e o que a Dakar faz.
- A última etapa leva `dk-stage--final` (borda laranja), porque é onde o caminho termina: cliente na agenda.

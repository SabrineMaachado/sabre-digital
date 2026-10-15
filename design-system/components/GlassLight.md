# GlassLight

O fundo da marca: manchas de luz laranja desfocadas que flutuam devagar sobre o grafite ou a névoa, ligando o laranja ao preto sem faixa de degradê.

```html
<section class="dk-scene" data-theme="dark">
  <div class="dk-light dk-light--a"></div>
  <div class="dk-light dk-light--b"></div>
  <div class="dk-light dk-light--c"></div>
  <div class="dk-grain"></div>
  <!-- conteúdo da seção -->
</section>
```

- `--a` (18s) e `--b` (23s) são as luzes grandes, que cruzam a seção em diagonais opostas; `--c` (20s) é menor e opcional.
- `.dk-grain` adiciona uma textura de pontos sutil. Use só em seções escuras.
- Em fundo claro, baixe a opacidade das luzes para cerca de 0.26 (`style="opacity:.26"`).
- No celular e em telas de toque as luzes ficam paradas, e a `--c` some.
- Use em no máximo três seções da página (hero, motor e fechamento), para o efeito não cansar.

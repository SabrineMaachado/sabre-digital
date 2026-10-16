# Button

Dois botões, o principal laranja e o secundário transparente. A luz que percorre a borda é um destaque à parte, só para os botões de contato.

- **Principal** (`dk-btn dk-btn--primary`): degradê laranja de 145° com texto branco em 19px negrito.
- **Secundário** (`dk-btn dk-btn--ghost`): transparente, borda laranja fina e texto `ink`. Para "Ver como funciona", "Saiba mais" e os botões dos planos.
- **Luz na borda** (`dk-btn--light`): soma-se ao principal ou ao secundário e faz uma luz dar a volta na borda, contínua e lenta (6s por volta). Use **só** nos botões de contato: "Falar com especialista" (principal) e "Falar com a Dakar" (secundário pequeno, no menu).
- **Pequeno** (`dk-btn--sm`): para o menu e os cards. No principal pequeno (16px), o texto branco fica abaixo do contraste recomendado: prefira o secundário pequeno.

```html
<a href="#contato" class="dk-btn dk-btn--primary dk-btn--light">Falar com especialista</a>
<a href="#metodo" class="dk-btn dk-btn--ghost">Ver como funciona</a>
<a href="#contato" class="dk-btn dk-btn--ghost dk-btn--sm dk-btn--light">Falar com a Dakar</a>
```

Use `<a>` para navegar e `<button>` para enviar formulário; as classes funcionam nos dois. A luz usa `@property`, disponível nos navegadores atuais; nos antigos, o botão aparece sem a luz, sem quebrar.

# Button

Dois botões, os dois com uma luz que percorre a borda continuamente (uma volta a cada 3.2s, 1.8s no hover).

- **Principal** (`dk-btn dk-btn--primary`): degradê laranja de 145° com texto branco em 19px negrito. A ação mais importante da tela, como "Quero o motor de clientes".
- **Secundário** (`dk-btn dk-btn--ghost`): transparente, borda laranja fina e texto `ink`. Para "Ver o método", "Saiba mais".
- **Pequeno** (`dk-btn--sm`): soma-se a qualquer um dos dois, para o header e os cards. No principal pequeno (16px), o texto branco fica abaixo do contraste recomendado: prefira o secundário pequeno.

```html
<a href="#contato" class="dk-btn dk-btn--primary">Quero o motor de clientes</a>
<a href="#metodo" class="dk-btn dk-btn--ghost">Ver o método</a>
```

Use `<a>` para navegar e `<button>` para enviar formulário; as classes funcionam nos dois. A luz na borda usa `@property`, disponível nos navegadores atuais; nos antigos, o botão aparece sem a luz, sem quebrar.

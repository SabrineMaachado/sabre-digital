# Wordmark

O logotipo da Dakar: "Dakar" em Sora 300 com D maiúsculo, inclinado −9°, com "DIGITAL" opcional embaixo.

```html
<div class="dk-lockup" style="font-size: 72px">
  <span class="dk-wordmark"><span class="dk-wordmark__word">Dakar</span></span>
  <span class="dk-lockup__tag">DIGITAL</span>
</div>
```

- O tamanho vem do `font-size` do `.dk-lockup` (ou do `.dk-wordmark` sozinho), e "DIGITAL" escala junto.
- No header, use só o `.dk-wordmark` entre 28px e 40px, sem "DIGITAL".
- A cor segue `ink`, então se ajusta sozinha ao tema. Sobre laranja, defina `color: var(--graphite)`.
- Sem ponto, degradê ou contorno no nome.
- Dê ao link do logo um `aria-label="Dakar Digital"`.

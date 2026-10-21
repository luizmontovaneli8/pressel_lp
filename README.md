# Pressel

Página estática responsiva, com fundo preto e controle de deslizar para abrir o YouTube. Funciona com toque, mouse e teclado (setas ou End). Um gesto incompleto retorna ao início; clicar no final da trilha não redireciona.

## Executar localmente

Requer Python 3, sem instalação de pacotes:

```sh
cd /workspace/pressel_lp
python3 -m http.server 3000 --bind 0.0.0.0
```

Para mudar o destino, edite `DESTINATION_URL` em `script.js` e atualize os textos e rótulos de acessibilidade em `index.html`.

## Verificação

Abra a página em um navegador. Arraste o círculo até o final para abrir `https://www.youtube.com/`. Verifique também um gesto incompleto, clique no final da trilha e navegação pelo teclado. Não há build nem dependências externas.

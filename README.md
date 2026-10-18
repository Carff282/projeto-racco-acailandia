# Racco Açailândia

Landing page institucional e mostruário digital para a loja Racco em
Açailândia, Maranhão. A página apresenta a proposta da loja, categorias de
produtos, canais de contato e informações para visita presencial.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro, sem dependências de build

## Como visualizar

Abra o arquivo `index.html` diretamente no navegador. Para testar com um
servidor local, use uma extensão como Live Server no VS Code ou execute na
pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse <http://localhost:8000>.

## Funcionalidades

- Layout responsivo para celular e desktop.
- Navegação mobile com botão de menu acessível.
- Mostruário com filtros por rosto, corpo, perfumaria e maquiagem.
- Botões de contato que iniciam uma conversa no WhatsApp, com mensagens
  específicas para cada categoria.
- Mapa incorporado e link para traçar uma rota até a loja.
- Animações discretas, respeitando a preferência por movimento reduzido.

## Estrutura

```text
.
├── index.html   # Conteúdo e estrutura da página
├── style.css    # Identidade visual e estilos responsivos
├── script.js    # Menu, filtros e links de contato
└── README.md
```

## Dados da loja

- **Endereço:** R. São Luís, 305 — Centro, Açailândia — MA, 65930-000
- **Telefone / WhatsApp:** (99) 99131-0166
- **Plus Code:** 3G33+4C Açailândia, MA
- **Coordenadas do mapa:** -4.9472443, -47.4964771

## Manutenção

### Atualizar o WhatsApp

Altere `whatsappNumber` em `script.js`. O valor deve conter código do país e
DDD, apenas com números. Atualmente está definido como `5599991310166`.

### Atualizar os produtos do mostruário

Edite os cartões dentro de `.product-grid` em `index.html`. Cada cartão usa
`data-category` para determinar seu filtro (`rosto`, `corpo`, `perfumaria` ou
`maquiagem`) e `data-interest` para montar a mensagem do WhatsApp. Atualize
também a imagem, o texto alternativo, o rótulo e o título do cartão.

As imagens atuais do catálogo são ilustrativas e vêm do Unsplash. Substitua-as
por imagens dos produtos disponíveis na loja antes de divulgar o mostruário
como catálogo atualizado. Não há preços, estoque nem compra online nesta
versão.

### Atualizar endereço ou localização

O endereço e o Plus Code aparecem na seção “Onde estamos” de `index.html`. O
mapa incorporado e o link “Como chegar” usam as coordenadas acima; atualize os
dois endereços de mapa caso a localização da loja mude.

## Referências

- [Site oficial da Racco](https://www.racco.com.br/)
- [Localização da loja no Google Maps](https://www.google.com/maps/place/Racco+a%C3%A7ailandia-ma+loja+vendas+e+cadastro/@-4.947161,-47.4965065,235a,75y,147.76h,87.11t/)


# tvOnline

Este é um projeto simples de TV ao vivo em que o usuário pode assistir canais ao vivo através de URLs M3U. O sistema carrega uma lista de canais de uma URL M3U pública, exibe os canais com seus nomes e logos, e permite que o usuário selecione um canal para reprodução ao vivo.

## Funcionalidade

- Exibe uma lista de canais ao vivo com nome e logo (se disponível).
- Permite ao usuário selecionar um canal para reprodução no player de vídeo.
- Reproduz canais ao vivo via HLS (HTTP Live Streaming) usando o formato M3U.

## Como usar

### Requisitos

- Um navegador moderno que suporte reprodução HLS.

### Instalação

1. Clone este repositório ou baixe o código do projeto.

2. Coloque os arquivos em um servidor local ou abra diretamente no navegador.

3. As dependências (como HLS) são gerenciadas diretamente pelos navegadores modernos, então não há necessidade de bibliotecas externas para a reprodução de vídeo.

### Estrutura de Arquivos

- **index.html**: A página principal que exibe o player de vídeo e a lista de canais.
- **acao/acao.js**: Script que carrega os canais da URL M3U e manipula a reprodução dos canais selecionados.
- **estilo/estilo.css**: Arquivo de estilo para a página.

### Execução

1. Abra o arquivo `index.html` em um navegador.
2. A lista de canais será carregada automaticamente.
3. Clique sobre um canal para começar a reprodução.

### Exemplo de interface

A interface apresenta um player de vídeo no topo e uma lista de canais abaixo. Cada canal é exibido com um ícone (logo) e o nome. Ao clicar sobre um canal, o player começa a reproduzir o conteúdo ao vivo.

### Comportamento de Reprodução

Os canais são carregados a partir da URL M3U pública: `https://iptv-org.github.io/iptv/index.m3u`. Quando o usuário seleciona um canal, o link do canal é passado para o player de vídeo e a reprodução começa automaticamente.

### Recursos

- **Player de Vídeo**: Utiliza o formato HLS (M3U) para reprodução de vídeos ao vivo.
- **Lista de Canais**: Canais ao vivo são carregados e listados dinamicamente.
- **Logo dos Canais**: Se disponível, a logo do canal é exibida ao lado do nome do canal.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

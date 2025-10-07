# Sistema de Vídeo e Ofertas

link de produção: https://teste-states-media-lwrlfi1cv-ricardos-projects-63b6ee84.vercel.app/

Este projeto é um frontend em React + Vite que reproduz um layout inspirado no YouTube com:
- Player de vídeo integrado via ConverteAI VTurb
- Informações do vídeo com overlay em bottom sheet no mobile
- Seção de comentários
- Seção de produtos/ofertas com botão de conversão (Lead)
- Header com busca e navegação lateral (Sidebar)

## Tecnologias
- React 19
- Vite
- Tailwind CSS
- React Icons

## Estrutura principal
- `src/components/VideoPlayer.jsx`: integra o player VTurb usando script dinâmico e container com `id` do player.
- `src/components/VideoInfo.jsx`: mostra título, canal, ações e descrição; no mobile abre em bottom sheet.
- `src/components/Comments.jsx`: lista de comentários (lazy load).
- `src/components/ProductSection.jsx`: cards de ofertas com CTA.
- `src/components/Header.jsx`: barra superior com busca.
- `src/components/Sidebar.jsx`: navegação lateral.
- `src/App.jsx`: orquestra a página.

## Comportamento responsivo do player
- Mobile: o vídeo fica colado ao topo e fixado logo abaixo do header ao dar scroll.
- Desktop: o vídeo não fica fixado ao rolar e ocupa 80% da altura da tela.

## Como rodar
1. Instale deps: `npm install`
2. Ambiente de dev: `npm run dev`
3. Abra no navegador: `http://localhost:5173/`

## Observações sobre o player VTurb
- O script do player é injetado uma única vez no `head` para evitar duplicação.
- O container do player tem `id` específico (`vid_6706cb8f4d8852000be1abc0`) e inclui `thumbnail` e `backdrop` conforme o embed.
- Se algum recurso externo for bloqueado (ex.: AdBlock/CDN), desative extensões ou teste em janela anônima.

## Personalizações
- Ajuste o offset do sticky no mobile (top) conforme a altura real do header.
- Altere a altura do player no desktop (ex.: `70vh` ou `calc(100vh - alturaHeader)`).
- Ajuste breakpoints conforme necessidade.

## Build
- `npm run build` gera artefatos em `dist/`.

## Licença
Uso interno para fins de demonstração de layout e integração de player.

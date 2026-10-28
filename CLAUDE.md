# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

- `npm run dev` — servidor Vite
- `npm run build` — `tsc -b && vite build` (o typecheck roda como parte do build; use `npx tsc -b` para checar só os tipos)
- `npm run lint` — ESLint
- `npm run storybook` — Storybook em http://localhost:6006
- `npx vitest --project storybook run` — roda todas as stories como testes (Chromium headless via Playwright)
- `npx vitest --project storybook run src/App.stories.tsx` — roda uma story/arquivo específico

Não há suíte de testes além das stories: cada story com `play` é um teste.

## Arquitetura

O app React 19 + TypeScript + Vite em `src/` é um esqueleto: `App.tsx` mínimo (sem providers, rotas, fetch ou portais), tokens em `src/tokens/` e componentes em `src/components/`. O CSS global fica em `src/index.css` (só reset básico, base `1rem = 10px` e cores do `body` vindas dos tokens); o tema claro/escuro vem das variáveis injetadas por `injectTokens()`. Os arquivos de exemplo do template (Vite e Storybook) foram removidos.

As pastas `heuristicasNielsen/`, `learnJP/` e `pooGame/` são projetos independentes em HTML/CSS/JS puro, sem relação com o app React. Estão no `.gitignore` e não devem ser adicionadas ao git; não fazem parte do build nem do lint do Vite.

### Pasta `docs/` (somente local)

Está no `.gitignore`: serve apenas como referência local e não sobe ao git. Estrutura atual:

```
docs/
├── debito-tecnico/                  (vazia)
├── historias/                       histórias de usuário/atividades técnicas
│   └── variaveis.txt                pedido de design tokens: cores com tema, espaçamentos (grid), fontSizes, larguras de tela (desk/tablet/mobile)
└── refinamento/                     análises em linguagem simples para decisão
    ├── 01-heuristicasNielsen.md
    ├── 02-pooGame.md
    ├── 03-learnJP.md
    └── 04-padroes-variaveis.md      padrões extraídos dos 3 projetos + proposta de tokens
```

O projeto vai virar um hub de mini projetos (módulos) para estudo; `heuristicasNielsen`, `pooGame` e `learnJP` serão integrados. O usuário tem pouca bagagem técnica: os refinamentos devem explicar termos e terminar com tabela de decisões.

### Tokens de design (`src/tokens/`)

Fonte única dos valores de design; **sempre use esses tokens** em vez de valores soltos (`#fff`, `16px`, `480px`) em componentes, stories e CSS-in-JS. Importe de `src/tokens` (`index.ts` reexporta tudo).

- `colors.ts` — `colors.light` / `colors.dark`, com chaves por nome de cor (`gray`, `blue`, `green`, `red`, `orange`), escala `100`–`900` (maior = mais escuro) e `black` absoluto. Ex.: `colors.dark.blue[600]`.
- `spacing.ts` — escala `spacing[1..7]` em px (base 4px, vinda do pooGame).
- `fontSizes.ts` — `xs`..`2xl` em rem.
- `breakpoints.ts` — `breakpoints` (números) e `mediaQueries` (strings para `matchMedia`/`@media`; variáveis CSS não funcionam dentro de `@media`).

`src/index.css` define `:root { font-size: 62.5% }`, ou seja, **1rem = 10px** (o texto base fica no `body`). Ao escrever tamanhos em rem, pense nessa base (1.6rem = 16px).

### Componentes (`src/components/`)

`Box` (apenas um `<section>` que repassa props, incluindo `style`; sem props de layout), `Typography`, `Button`, `Input`, `Select`, `ProgressBar`, `WindowFrame` e `Tag`, cada um em sua pasta com `.tsx`, `.module.css` (quando precisa de estados CSS) e `.stories.tsx`. Eles leem variáveis CSS geradas dos tokens (`injectTokens()` em `main.tsx` e em `.storybook/preview.tsx`; tema escuro via sistema ou `data-theme` no `<html>`). Componentes novos devem seguir o mesmo padrão e usar só tokens. Levantamento e pendências em `docs/resultados/componentes-padronizaveis.md`.

### Layout e navegação

- `src/layout/`: uma pasta por componente (`src/layout/<Nome>/<Nome>.tsx`, `.module.css`, `.stories.tsx`) e um `index.ts` que reexporta todos, igual a `src/components/`. Peças: `AppShell` (estado de sidebar recolhida e página ativa), `Header`, `Sidebar`, `NotificationsMenu` e `ProfileMenu`. Com a sidebar recolhida, os textos **não são renderizados** (só ícones, com `aria-label`).
- Em telas até 1024px (`mediaQueries.compact`, via `useMediaQuery`), a `Sidebar` sai e entra a `BottomNav` (barra inferior, como em React Native) com um botão de menu que abre o `MobileMenu` (bottom sheet com `@radix-ui/react-dialog`) listando módulos e páginas. O botão de recolher a sidebar também some. Novos itens da barra inferior entram em `BottomNav.tsx`.
- Roteamento com `react-router`: `src/App.tsx` só monta o `BrowserRouter`; as rotas ficam em `src/AppRoutes.tsx` (o `AppShell` é a rota de layout e renderiza `<Outlet />`). Os itens de navegação são `NavLink` (o `aria-current="page"` vem da rota). As stories usam `MemoryRouter` (decorator em `.storybook/preview.tsx`); use `parameters.initialEntries` para abrir numa URL específica.
- `src/navigation/pages.ts`: fonte única das páginas e grupos (Tech, Línguas), cada página com `path`. Uma nova tela = entrada ali + componente em `src/pages/` (hoje `PlaceholderPage`); título/descrição do header e rota derivam da mesma definição. Rotas desconhecidas caem em `NotFoundPage`. Em produção, o servidor precisa devolver `index.html` para qualquer caminho (SPA fallback).
- `src/mocks/`: dados mockados (notificações). O perfil ainda não tem página.
- Bibliotecas adotadas: `lucide-react` (ícones) e `@radix-ui/react-popover` / `react-collapsible` / `react-dialog` (popovers, grupos expansíveis e bottom sheet). Popovers renderizam em portal, então testes de `play` devem usar `screen` para consultar o conteúdo.

### Módulo Japonês (port do learnJP)

- Lógica e dados em `src/modules/japanese/`: `data/` (grupos de hiragana e palavras, em TS), `game/` (`deck.ts`, `pools.ts`, `answers.ts` puros; `reducer.ts` + `GameProvider`/`gameContext.ts` com `useReducer` + Context; o provider envolve as rotas em `AppRoutes`).
- Telas em `src/pages/Japanese/<Nome>/` (uma pasta por componente, como em `components/`), uma rota por tela (`japanesePaths` em `navigation/pages.ts`): módulos → letras/palavras → configuração (modo livre) ou aleatório → partida (`/practice/game`) → resultado. `/game` e `/result` sem sessão redirecionam para os módulos; as telas iniciais de Letras e Palavras limpam a sessão ao montar.
- Componentes genéricos criados para o jogo: `ActionCard` (link, botão ou estático), `ToggleChip`, `Slider`, `ConfirmDialog` (`@radix-ui/react-alert-dialog`), `BackLink`; `Input` ganhou `success`.
- O fluxo completo é testado em `src/pages/Japanese/JapaneseGame/JapaneseGame.stories.tsx` (o play lê o card na tela e responde pelo dataset).
- A pasta `learnJP/` continua só como referência; só `localStorage` é permitido (o jogo não persiste nada além do tema).

### Storybook

- Config em `.storybook/`; `preview.tsx` importa `../src/index.css` para que as stories usem o CSS real. Se o app ganhar providers, portais ou chamadas de rede, adicione-os ali (decorators/MSW) em vez de contornar em cada story.
- As stories ficam colocadas ao lado dos componentes (`*.stories.tsx`) e são descobertas por `../src/**/*.stories.*` e `*.mdx`.
- O projeto `storybook` do Vitest é definido em `vite.config.ts` (plugin `storybookTest`).
- Stories geradas por IA usam `tags: ['ai-generated']`; mantenha `'needs-work'` junto enquanto não passarem no Vitest.
- Em `play`, `canvas` e `userEvent` vêm dos argumentos; `expect` vem de `storybook/test`.

## Preferências de trabalho

- **Persistência apenas em `localStorage`** até existirem atividades que implementem chamadas a backend. Não crie APIs, banco, cookies de sessão nem libs de dados remotos antes disso. Envolva leitura e escrita em `try/catch` (o storage pode estar bloqueado) e use chaves com prefixo `ultrahub-` (ex.: `ultrahub-theme`).
- **Sem comentários no código**, a menos que uma regra muito específica seja implementada ou um aviso seja necessário (ex.: componente comentado que poderá ser reativado por decisão futura). Não use comentários para descrever o que o código já diz; prefira bons nomes. Exceção atual: o `font-size: 62.5%` em `src/index.css`.
- **Todo o código em inglês**: identificadores (variáveis, funções, objetos, chaves, props, nomes de stories, classes CSS) e comentários. Só ficam em português os textos que o usuário final enxerga (labels, mensagens, conteúdo de exemplo nas stories) e a documentação em `docs/`/`CLAUDE.md`.
- Ao apresentar opções para uma decisão de implementação, **sempre inclua possibilidades de bibliotecas já existentes** (com prós e contras) ao lado da solução feita à mão, para o usuário decidir.

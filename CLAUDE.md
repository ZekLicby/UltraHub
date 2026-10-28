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

O app React 19 + TypeScript + Vite em `src/` ainda é praticamente o template do Vite (`App.tsx` único, sem providers, rotas, fetch ou portais). O CSS global fica em `src/index.css` (tokens como variáveis CSS, incluindo dark mode via `prefers-color-scheme`) e o específico do `App` em `src/App.css`.

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

### Storybook

- Config em `.storybook/`; `preview.tsx` importa `../src/index.css` para que as stories usem o CSS real. Se o app ganhar providers, portais ou chamadas de rede, adicione-os ali (decorators/MSW) em vez de contornar em cada story.
- As stories ficam colocadas ao lado dos componentes (`*.stories.tsx`) e são descobertas por `../src/**/*.stories.*` e `*.mdx`.
- O projeto `storybook` do Vitest é definido em `vite.config.ts` (plugin `storybookTest`).
- Stories geradas por IA usam `tags: ['ai-generated']`; mantenha `'needs-work'` junto enquanto não passarem no Vitest.
- Em `play`, `canvas` e `userEvent` vêm dos argumentos; `expect` vem de `storybook/test`. `CssCheck` em `App.stories.tsx` valida valores computados para provar que o CSS global carregou — itens de container flex têm `display` bloqueado (`inline-flex` vira `flex`), então prefira outras propriedades.

## Preferências de trabalho

- **Sem comentários no código**, a menos que uma regra muito específica seja implementada ou um aviso seja necessário (ex.: componente comentado que poderá ser reativado por decisão futura). Não use comentários para descrever o que o código já diz; prefira bons nomes. Exceção atual: o `font-size: 62.5%` em `src/index.css`.
- **Todo o código em inglês**: identificadores (variáveis, funções, objetos, chaves, props, nomes de stories, classes CSS) e comentários. Só ficam em português os textos que o usuário final enxerga (labels, mensagens, conteúdo de exemplo nas stories) e a documentação em `docs/`/`CLAUDE.md`.
- Ao apresentar opções para uma decisão de implementação, **sempre inclua possibilidades de bibliotecas já existentes** (com prós e contras) ao lado da solução feita à mão, para o usuário decidir.

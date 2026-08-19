# Portfólio — Alisson Moura

Site pessoal em React 19 + TypeScript + Vite, com tema claro/escuro e conteúdo bilíngue (PT-BR / EN).

**URL no ar:** [https://portifolio.ajsmtech.com](https://portifolio.ajsmtech.com)

**Stack:** React 19 · TypeScript · Vite 8 · CSS com design tokens · zero dependências de UI.

## Rodando localmente

```bash
npm install
```

```bash
npm run dev
```

Abre em `http://localhost:5173`.

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Type-check (`tsc -b`) + build de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | ESLint |
| `npm run typecheck` | Verificação de tipos sem emitir |

## Estrutura

```
src/
  components/     Seções da página (Header, Hero, Projects, ...)
  hooks/          useTheme, useActiveSection
  i18n/           Dicionários PT/EN, provider e hook
    types.ts      Contrato do conteúdo — as duas línguas obedecem ao mesmo tipo
    pt.ts en.ts   Todo o conteúdo do site
  index.css       Design tokens + estilos
```

### Editando o conteúdo

Todo o texto vive em `src/i18n/pt.ts` e `src/i18n/en.ts`. Os dois arquivos são
tipados por `Dictionary` (`src/i18n/types.ts`), então esquecer de traduzir um
campo quebra o build em vez de passar despercebido.

Para adicionar um projeto, inclua um objeto no array `projects.items` **nos dois
arquivos**, seguindo a interface `Project`.

### Temas

Os tokens ficam em `:root` (escuro, padrão) e `[data-theme='light']` em
`src/index.css`. O tema é aplicado antes da primeira pintura por um script inline
em `index.html`, evitando flash da cor errada no carregamento.

Todos os pares de texto/fundo foram verificados em contraste e atendem
WCAG AA (mínimo 4.5:1).

## Deploy

Configurado para Netlify (`netlify.toml`): build `npm run build`, publish `dist`.

Para Vercel, basta importar o repositório — o preset de Vite é detectado
automaticamente. Nenhuma variável de ambiente é necessária.

# AGENTS.md — Portfolio de Pedro Caldas

## Repositório

Portfólio pessoal de **Pedro Caldas** (`jp-caldas`), Data Analyst / Analytics Engineer / AI Specialist.
Deploy automático via GitHub Actions para GitHub Pages.

## Content Sources (`conteudo/`)

| Arquivo | Seção |
|---|---|
| `Pedro_Caldas_Data_Analyst-pt.md` | Hero, About, Experience, Education, Skills (PT) |
| `Pedro_Caldas_Data_Analyst-en.md` | Hero, About, Experience, Education, Skills (EN) |
| `Projetos IFC e Polen.md` | Projetos #4 e #5 |
| `projetos-n8n-descrição.md` | Projetos #1, #2, #3 |
| `perfil_foto.png` | Foto de perfil |

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Estilo:** Tailwind CSS v3
- **i18n:** React Context com arquivos `src/locales/{pt,en}.json`
- **Build:** `output: 'export'` (static site)

## Deploy

- GitHub Actions em `.github/workflows/deploy.yml`
- URL: `jp-caldas.github.io/portfolio`
- `basePath: '/portfolio'` no `next.config.js`
- Node.js 20 no CI (local precisa Node >= 18.17)

## Estrutura

```
src/
  app/          layout.tsx, page.tsx, globals.css
  components/   7 componentes (Navbar, Hero, About, Experience, EducationSkills, Projects, Contact, Footer)
  context/      LocaleContext (toggle PT/EN)
  data/         profile.ts, experience.ts, education.ts, projects.ts
  locales/      pt.json, en.json
public/images/  SVGs + perfil_foto.png
conteudo/       markdown fonte (não editar código gerado diretamente)
```

## Seções do Site

Hero → About (01) → Experience (02) → Education & Skills (03) → Latest Works (04) → Contact (05)

5 projetos com detalhes expansíveis. Stats: 05+ anos, 05 empresas, 12+ projetos.

## Commands

```bash
npm run dev      # http://localhost:3000/portfolio
npm run build    # static export to out/
npm run lint     # lint check
```

## Notas

- Toggle de idioma está no Navbar (PT/EN)
- Botão "Download PDF Resume" precisa ser conectado ao PDF (não gerado ainda)
- Formulário de contato não tem backend — apenas frontend
- Cor primária: `#fe4300` (laranja)
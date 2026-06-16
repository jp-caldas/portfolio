# AGENTS.md — Portfolio de Pedro Caldas

## Repositório

Portfólio pessoal de **Pedro Caldas** (`jp-caldas`), Data Analyst / Analytics Engineer / AI Specialist.
Deploy via GitHub Pages (HTML/CSS/JS puro, zero build).

## Content Sources (`conteudo/`)

| Arquivo | Seção |
|---|---|
| `Pedro_Caldas_Data_Analyst-pt.md` | Hero, About, Experience, Education, Skills (PT) |
| `Pedro_Caldas_Data_Analyst-en.md` | Hero, About, Experience, Education, Skills (EN) |
| `Projetos IFC e Polen.md` | Projetos #4 e #5 |
| `projetos-n8n-descrição.md` | Projetos #1, #2, #3 |
| `perfil_foto.png` | Foto de perfil |

## Stack

- **HTML/CSS/JS puro** — sem frameworks, sem build, sem dependências
- **Fonte:** Bricolage Grotesque (Google Fonts)
- **i18n:** Atributos `data-pt` / `data-en` alternados via JS
- **PDFs:** `pdfs/Pedro_Caldas_Data_Analyst-{locale}.pdf`

## Deploy

- GitHub Pages serve direto da raiz (`index.html`)
- URL: `jp-caldas.github.io/portfolio`
- Zero build — só git push

## Estrutura

```
index.html              site completo
css/style.css           estilos
js/script.js            toggle PT/EN + expandir projetos
images/perfil_foto.png  foto de perfil
pdfs/                   currículos em PDF
conteudo/               markdown fonte (não editar código gerado)
```

## Seções do Site

Hero → About (01) → Experience (02) → Education & Skills (03) → Latest Works (04) → Contact (05)

5 projetos com detalhes expansíveis. Stats: 05+ anos, 05 empresas, 12+ projetos.

## Como testar

Abrir `index.html` direto no navegador (sem servidor).

## Notas

- Toggle de idioma no botão PT/EN no Navbar
- Botão "Download PDF Resume" linka pro PDF correspondente ao idioma
- Cor primária: `#fe4300` (laranja)

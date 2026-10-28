# Rafael Douglas | Freelance Web Designer & Developer

A polished, modern personal portfolio for **Rafael Douglas**, an aspiring
freelance web designer & developer building modern, responsive websites for
small businesses. Available for remote projects worldwide.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- Sticky navigation with accessible mobile menu
- Hero with an abstract CSS visual (no stock photos)
- Selected Work: two project cards (NorthStar Cleaning & NovaFit Fitness Studio)
  with live demo / source links and graceful pending placeholders
- Services: Business Websites, Landing Pages, Responsive Website Redesign
- About, Process (Discover → Plan → Build → Refine), Contact, and Footer
- Mobile-first, fully responsive
- Subtle animations that respect `prefers-reduced-motion`
- Semantic HTML, keyboard navigation, visible focus indicators

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev

# build for production
npm run build
```

Then open <http://localhost:3000>.

## Configuration

Edit `lib/site-data.ts` to update:

| Field | What to change |
| --- | --- |
| `SITE.email` | `rafaeldouglassantossilva211@gmail.com` (already set) |
| `SITE.github` | `https://github.com/rafael-d-santos-dev` (already set) |
| `SITE.location` | `Remote Worldwide` |
| `PROJECTS[].demoUrl` / `repoUrl` | Add or update the live demo and source code URLs for each project |
| `PROJECTS` | Add or edit project entries |
| `SERVICES`, `PROCESS` | Adjust services and process steps |

> The email link uses `mailto:rafaeldouglassantossilva211@gmail.com`. Email is
> the primary contact method. No fake backend or "message sent" confirmation
> is used.

## Deployment

The project is ready to deploy on **Vercel**:

1. Push the repository to GitHub.
2. Import it on [vercel.com](https://vercel.com).
3. Vercel auto-detects Next.js — no extra config needed.

It can also be deployed to Netlify (a `netlify.toml` is included).

## Project structure

```
app/                # Next.js App Router pages
  layout.tsx        # Fonts + metadata
  page.tsx          # Home page composition
  globals.css       # Theme tokens + animations
components/sections/ # Section components (navbar, hero, work, ...)
lib/site-data.ts    # Editable content (projects, services, contact info)
```

## Notes

- The two projects shown are labelled as portfolio concepts.
- No authentication, databases, paid APIs, or fabricated testimonials are used.
- Project preview visuals are rendered with CSS so the site stays fast and
  works without external screenshot assets.

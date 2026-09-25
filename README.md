# Digital Chautari

A Next.js App Router site for Digital Chautari, a creative technology company from Kathmandu. The interface follows the frontend brief with Sora headings, Inter body text, a teal/gold/leaf palette, responsive layouts, and reduced-motion support.

## Routes

- `/` — Home
- `/services` — Services, pricing, and industries
- `/products` — Product venture switcher
- `/about` — Story, values, team, and roadmap
- `/contact` — Contact details and project form

## Contact API

`POST /api/contact` validates submissions server-side with the same Zod schema the form uses (`src/lib/contact.ts`) and returns a JSON success or error message. It does not store or email messages yet: valid submissions are only logged to the server console. Connect an email service or database in `src/app/api/contact/route.ts` before going live.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm test
npm run build
```

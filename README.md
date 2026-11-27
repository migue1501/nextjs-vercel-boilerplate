This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact form (Resend)

The contact form posts to `/api/contact`. That route sends the enquiry to `CONTACT_EMAIL` through [Resend](https://resend.com).

Required environment variables (see `.env.example`):

- `RESEND_API_KEY` — Resend API key (Secret, server-only).
- `CONTACT_EMAIL` — destination inbox (default: `nsatcomputers@gmail.com`).
- `RESEND_FROM_EMAIL` — sender. Defaults to `NSAT Web <onboarding@resend.dev>`, which can only deliver to the email on your Resend account.
- `RESEND_ACK_FROM_EMAIL` — optional. Set it to a sender on a verified domain to also email a confirmation to the visitor.

Email templates live in `src/lib/email-templates.ts` (internal notification + customer acknowledgement, in Spanish and English). All user input is HTML-escaped before being included in the message.

If `RESEND_API_KEY` is missing or Resend rejects the send, the API returns an error and the form shows the failure message instead of a false success.

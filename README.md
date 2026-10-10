# Sawad-Inspired Full-Stack Developer Portfolio

A sleek, modern, high-performance portfolio crafted with the signature **Sawad Framer design aesthetic**, built on **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features & Architecture

- **Signature Sawad Visuals:**
  - Deep matte charcoal palette (`#121110`) with vibrant electric neon lime (`#C5FF41`) accents.
  - High-impact display typography with outline and solid stroke text effects.
  - Floating pill navigation bar with status radar indicator and mobile drawer menu.
  - Bento metric counter cards (`+8 Years`, `+48 Projects`, `+24 Clients`, `99.99% Uptime`).
  - Seamless infinite marquee ticker showcasing engineering specialties.
- **Interactive Project Architecture Case Studies:**
  - Bento grid of featured full-stack projects with live demo and GitHub buttons.
  - In-depth modal overlay detailing:
    - Core metrics (Throughput, P99 latency, cost savings)
    - Engineering challenges & architectural solutions
    - System design highlights & tech stack pills
- **Work Experience & Career Journey:**
  - Chronological career timeline with company badges, date ranges, bullet achievements, and stack tags.
- **Categorized Tech Stack & Tools:**
  - Interactive filter tabs (`All`, `Frontend`, `Backend`, `Database & Cloud`, `Tools & Design`).
  - Bento tool cards with icons and proficiency level.
- **Interactive Contact Form with Next.js API Route:**
  - Validated contact form with budget selector, name, email, and message.
  - One-click copy email button with tooltip feedback.
  - Backed by `/api/contact` supporting [Resend](https://resend.com) email delivery with zero-config test fallback mode.
- **Centralized Data Configuration:**
  - All personal info, projects, career history, tools, and social links are centralized in a single file: `src/data/portfolioData.ts`.

---

## 🚀 Getting Started

### 1. Install Dependencies & Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) in your browser.

### 2. Building for Production

```bash
npm run build
npm run start
```

---

## 🛠️ Personalizing Your Portfolio

To customize the portfolio with your own details, open:

📁 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

Here you can easily edit:
- **`personal`**: Name, display title, tagline, bio, location, email, stats counters, and social links (GitHub, LinkedIn, Twitter/X).
- **`marqueeItems`**: Skills and keywords displayed in the moving banner.
- **`projects`**: Project titles, categories, case study details, live URLs, and GitHub repos.
- **`experience`**: Companies, roles, date ranges, and key achievements.
- **`tools`**: Frameworks, databases, and development tools.

---

## 📧 Configuring Email Delivery (Optional)

The contact form is pre-configured to work out of the box in test mode. To receive real emails to your personal inbox:

1. Sign up for a free account at [Resend](https://resend.com) and get an API key.
2. Open `.env.local` and add:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your.real.email@gmail.com
   ```
3. Restart your dev server.

---

## 🚢 Deployment

This project is ready to deploy on **Vercel** with zero configuration:

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. If using Resend, add `RESEND_API_KEY` and `CONTACT_EMAIL` under Environment Variables.
4. Click **Deploy**.

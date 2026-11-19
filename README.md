# Instant Healing Therapy — Next.js Application

A complete, responsive multi-page web application inspired by [Instant Healing Therapy](https://instanthealingtherapy.com/), founded by quantum healer and author **Sachin Karve**.

## Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form & Zod
- **API & Email:** Next.js Route Handlers (`/api/contact`) & Nodemailer (SMTP)

---

## Page Hierarchy & Routes

1. **`/`** — Homepage (Hero, Quantum Introduction, About Sachin Karve, Benefits & 4-Step Approach, Courses, Sessions, Testimonials, CTA, Footer Form)
2. **`/what-is-quantum-healing`** — Detailed explanation of the quantum field of pure consciousness, the 6 levels of the human being, and comparisons to conventional & energy modalities.
3. **`/learn-energy-healing`** — Overview of learning healing for beginners and practitioners.
4. **`/learn-quantum-healing`** — Masterclass on Quantum Healing (12-hour video course, 52 lessons, Triangulation, syllabus, and certificate).
5. **`/learn-heart-energy-healing`** — Masterclass on Heart Energy Healing (8-hour video course, 36 lessons, heart coherence, and emotional clearing).
6. **`/quantum-healing-session`** — 30-minute remote video therapy sessions, client-first fair-fee guarantee (pay only when noticing a shift), and symptom checklist.
7. **`/book-on-quantum-healing`** — E-Book *Instant Healing for Self and Others* by Sachin Karve on Amazon Kindle.
8. **`/insightful-articles-on-quantum-healing-and-wellness`** — Knowledge directory of all articles.
9. **`/articles/[slug]`** — Pre-rendered dynamic individual article pages with key takeaways, content, and author profiles.
10. **`/contact-for-quantum-healing`** — Full standalone contact page with cards for phone/WhatsApp, email, and worldwide hours.
11. **`/sachin-karve-quantum-healer`** — Complete biography of Sachin Karve (engineering background, corporate training, 25+ years spiritual awakening, and milestones).

---

## Shared Layout & Components

- **Top Contact Bar:** Phone/WhatsApp (`+91 9819858269`), Email (`sachin@instanthealingtherapy.com`), global timezone coverage.
- **Header & Navigation:** Responsive navbar with desktop hover dropdown for courses, call-to-action buttons, and mobile slide-over drawer.
- **WhatsApp Floating Button:** Corner button with quick chat prompt directly opening WhatsApp conversation.
- **Scroll-to-Top Button:** Appears smoothly after scrolling down the page.
- **Footer with Integrated Contact Form on EVERY Page:** Validated enquiry form embedded into the footer of every route.

---

## Contact Form & Email System

### Form Features
- **Client-Side Validation:** React Hook Form with Zod schema (`src/lib/validation.ts`).
- **Server-Side Validation:** Re-validated via Zod in `src/app/api/contact/route.ts`.
- **Spam & Abuse Protection:**
  - Hidden honeypot field to block automated bot submissions.
  - In-memory sliding-window IP rate limiter (`src/lib/rateLimit.ts`).
- **Email Delivery:** Nodemailer dispatches styled responsive HTML emails to `CONTACT_RECEIVER_EMAIL`.
- **Duplicate Protection:** Disables submit button and shows active spinner during in-flight requests.
- **Dev / Simulation Mode:** When SMTP credentials are not yet configured, the system logs submission payloads cleanly and returns a simulated success response.

### Environment Variables
Configure `.env.local` based on `.env.example`:

```env
# Receiver of contact enquiries
CONTACT_RECEIVER_EMAIL=sachin@instanthealingtherapy.com

# SMTP Server Settings (Server-only credentials)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-email@gmail.com
SMTP_PASS=your-smtp-app-password
SMTP_FROM="Instant Healing Therapy" <no-reply@instanthealingtherapy.com>
```

---

## Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

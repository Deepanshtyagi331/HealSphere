# HealSphere — Energy Therapy & Quantum Healing

A complete, responsive multi-page web application for **HealSphere**, inspired by holistic energy therapy, founded by quantum healer and author **Sachin Karve**.

## Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form & Zod
- **Backend:** Next.js Route Handlers (`/api/contact`)
- **Database:** MongoDB / Mongoose (with standalone console mode for easy Vercel deployment)

---

## Page Hierarchy & Routes

1. **`/`** — Homepage (Hero Banner Slider with automatic 5s crossfade, Quantum Introduction, About Sachin Karve, Benefits & Approach, Courses, Sessions, Testimonials, CTA, Footer Form)
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

## Key Features

- **HealSphere Header:** 3-section responsive layout with the HealSphere lotus & sphere branding, 6 clean navigation links, and desktop action buttons.
- **Hero Banner Slider:** Automatic infinite slider cycling through 3 healing artworks with 1.5-second opacity crossfade every 5 seconds.
- **WhatsApp Floating Button:** Corner button with quick chat prompt directly opening WhatsApp conversation.
- **Scroll-to-Top Button:** Appears smoothly after scrolling down the page.
- **Footer with Integrated Contact Form:** Validated enquiry form embedded into the footer of every route.
- **Vercel-Ready Contact API:** Form submissions are logged to the console/Vercel runtime logs and optionally stored in MongoDB.

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

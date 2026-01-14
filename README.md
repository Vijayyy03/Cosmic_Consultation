# Shiv Cosmic Energy Solutions

Premium astrology and Vastu consultation website built with Next.js 15, featuring advanced animations, cosmic backgrounds, and immersive user experience.

## Features

- 🌟 **Immersive Design**: Cosmic particle background with Three.js
- ✨ **Smooth Animations**: Framer Motion + Lenis smooth scrolling
- 🎨 **Premium UI**: Glassmorphism effects and luxury aesthetics
- 📱 **Fully Responsive**: Optimized for all devices
- ⚡ **High Performance**: Optimized for speed and Lighthouse scores

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js
- **Smooth Scrolling**: Lenis
- **Language**: TypeScript

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── VideoSection.tsx
│   │   ├── KundliReport.tsx
│   │   ├── Services.tsx
│   │   ├── PremiumOfferings.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Founder.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── CosmicBackground.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── SmoothScroll.tsx
│   ├── ScrollProgress.tsx
│   └── AnimatedSection.tsx
├── lib/
│   └── animations.ts       # Animation variants
└── tailwind.config.ts      # Tailwind configuration
```

## Build for Production

```bash
npm run build
npm start
```

## Customization

- **Colors**: Edit `tailwind.config.ts` cosmic and gold color values
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Content**: Update section components in `components/sections/`
- **Animations**: Adjust variants in `lib/animations.ts`

## License

All rights reserved © 2026 Shiv Cosmic Energy Solutions

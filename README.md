# The One Where Loves Ana 💜

A romantic, interactive Valentine's Day web application that merges the cozy 90s sitcom aesthetic of **Friends** with the dark, mysterious atmosphere of **Stranger Things**.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

### 🎨 Dual Theme System

- **Friends Mode**: Monica's Purple (#5F4B8B) with yellow accents, Permanent Marker font
- **Stranger Things Mode**: Void Black (#090909) with red glow effects, Merriweather Bold font
- Smooth theme transitions with one-click toggle

### 🎭 Interactive Components

- **Hero Section**: Dynamic text with theme-aware animations (rotation & glow effects)
- **Yellow Frame Portal**: Photo container styled as Monica's peephole frame
- **Message Wall**: Interactive A-Z Christmas lights that blink as you type (Joyce Byers style!)
- **Floating Spores**: Atmospheric particle effects in dark theme
- **Theme Toggle**: Coffee cup ☕ / Waffle 🧇 icon button

### 🎬 Animations

- Framer Motion page transitions
- Blinking light effects for message wall
- Floating particle system
- Text rotation and glow effects
- Smooth hover interactions

### 📱 Responsive Design

- Mobile-first approach
- Adapts from mobile (375px) to desktop (1440px+)
- Touch-friendly interactive elements

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd the-one-in-the-upside-down

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Adding Your Photo

Replace the placeholder image with your couple photo:

1. Add your photo to `public/couple-photo.jpg`
2. Recommended size: 500x600px (portrait orientation)
3. Refresh the page to see your photo!

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Permanent Marker, Merriweather)

## 📁 Project Structure

```text
app/
├── components/
│   ├── ThemeContext.tsx      # Global theme state
│   ├── ThemeToggle.tsx       # Theme switcher button
│   ├── HeroSection.tsx       # Main heading with animations
│   ├── YellowFramePortal.tsx # Photo frame component
│   ├── MessageWall.tsx       # Interactive light wall
│   └── FloatingSpores.tsx    # Particle effects
├── layout.tsx                # Root layout
├── page.tsx                  # Main page
└── globals.css               # Global styles
```

## 🎨 Customization

### Change the Name

Edit `app/components/HeroSection.tsx` line 25:

```tsx
Loves Ana  // Change "Ana" to your name
```

### Modify Colors

Update theme colors in `app/globals.css`:

```css
[data-theme="friends"] {
  --background: #5f4b8b; /* Your color */
  --accent: #f9d059; /* Your accent */
}
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Theme toggle switches between Friends/Stranger Things
- [ ] Message wall lights up when typing
- [ ] Animations play smoothly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Photo displays correctly

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel deploy
```

Or use the [Vercel Dashboard](https://vercel.com/new) for one-click deployment.

## 🎯 Credits

**Inspiration**:

- The TV show _Friends_ (1994-2004)
- The TV show _Stranger Things_ (2016-present)

**Built with**: Next.js, Tailwind CSS, Framer Motion, TypeScript

## 📝 License

This project is open source and available for personal use.

---

Made with 💜 and ☕

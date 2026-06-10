# MS Real Estate - Portfolio Website

A modern, responsive real estate portfolio website built with React, TanStack Router, and Tailwind CSS.

## Features

- 🎨 Modern luxury design aesthetic with dark mode support
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite build tool
- 🎯 Real estate project showcase
- 🌍 Multi-language support (i18n)
- 📊 Interactive charts and data visualization
- ♿ Accessible UI components
- 🎭 Beautiful animations with Framer Motion
- 📱 Mobile-friendly navigation

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Routing**: TanStack Router
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS 4, custom design system
- **UI Components**: Radix UI, shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Notifications**: Sonner Toast

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/MS-RealEstate.git
cd MS-RealEstate

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/        # React components
│   ├── layout/       # Layout components
│   ├── sections/     # Page sections
│   └── ui/           # UI components
├── routes/           # TanStack Router routes
├── lib/              # Utilities and helpers
├── hooks/            # Custom React hooks
├── assets/           # Static assets
└── styles.css        # Global styles
```

## Design System

The project uses a custom design system based on OKLCH color space with:

- **Primary Colors**: Deep navy (`oklch(0.28 0.07 260)`)
- **Accent Colors**: Warm gold (`oklch(0.78 0.14 78)`)
- **Typography**: Inter + Tajawal (Arabic support)
- **Radius**: Configurable with CSS custom properties

### Scrollbar Styling

Custom scrollbar styling is applied globally:
- Primary color on light mode
- Gold highlight on hover
- Consistent styling across browsers

## Deployment

### Netlify

The project includes a `netlify.toml` configuration for easy Netlify deployment:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the configuration and deploy

Key features:
- Automatic builds on push
- Redirects for SPA routing
- Cache headers optimization
- CDN distribution

## Performance

- Optimized production builds with Vite
- Code splitting for better load times
- Image optimization
- CSS minification
- JavaScript minification and compression

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Contact

Mostafa Said
- GitHub: [@Mostafa-SAID7](https://github.com/Mostafa-SAID7)
- LinkedIn: [Mostafa Said](https://www.linkedin.com/in/mostafasamirsaid)

---

Built with ❤️ for real estate professionals

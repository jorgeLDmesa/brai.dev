# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "brai.dev" - a Next.js 15 website for a development agency called "brai". The project uses React 19, TypeScript, and Tailwind CSS with a focus on modern web development practices. The site includes both a marketing landing page and a client dashboard system.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

## Tech Stack & Architecture

### Core Technologies
- **Next.js 15** with App Router (not Pages Router)
- **React 19** with TypeScript
- **Tailwind CSS** for styling with custom color scheme (primary: #D6F050, secondary: #9ACA3C, background: #000000)
- **Shadcn/ui** component library with Radix UI primitives
- **@shadergradient/react** for shader-based backgrounds

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Landing page with multiple sections
  - `dashboard/[id]/page.tsx` - Dynamic client dashboard
- `components/` - React components organized by feature
  - `ui/` - Shadcn/ui components (accordion, button, card, etc.)
  - `dashboard/` - Dashboard-specific components
  - Section components for landing page (hero-section, portfolio-section, etc.)
- `lib/utils.ts` - Utility functions including `cn()` for className merging
- `hooks/` - Custom React hooks

### Styling & Design System
- Dark theme with black background (#000000) and bright green accent colors
- Shadcn/ui configuration in `components.json`
- Custom font family for headings: Impact, Haettenschweiler, 'Arial Narrow Bold'
- CSS variables system for consistent theming
- Responsive design patterns

### Key Architectural Patterns
1. **Component-Based Architecture**: Each page section is a separate component
2. **Client-Side Rendering**: Uses "use client" directive for interactive components
3. **Dynamic Routing**: Dashboard uses dynamic routes with `[id]` parameter
4. **Shared UI Components**: Consistent design system via Shadcn/ui
5. **Utility-First CSS**: Tailwind CSS with custom configuration


### Import Aliases
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks`
- `@/ui` → `./components/ui`

## Development Notes

- Use `pnpm` as the package manager (pnpm-lock.yaml present)
- The project has two main page types: landing page and dashboard
- Dashboard components are modular and reusable
- 3D shader backgrounds are used for visual enhancement
- Components follow Shadcn/ui patterns and conventions
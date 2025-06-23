# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

This is a React + TypeScript application built with Vite. Key architectural elements:

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom component library
- **Routing**: React Router v7
- **UI Components**: Radix UI primitives wrapped in custom components
- **Form Handling**: react-hook-form with Zod validation

### Project Structure
- `/src/components/ui/`: Reusable UI components based on Radix UI and shadcn patterns
- `/src/pages/`: Route-based page components (Home, Product, Solutions, etc.)
- `/src/hooks/`: Custom React hooks
- `/src/lib/utils.ts`: Utility functions including `cn()` for className merging
- `/src/assets/`: Static assets including images

### Path Aliasing
The project uses `@/` as an alias for `./src/` directory. This is configured in both TypeScript and Vite.

### Component Architecture
The UI components follow shadcn/ui patterns:
- Components use Radix UI primitives for accessibility
- Styling uses Tailwind CSS with class-variance-authority for variants
- Components are fully typed with TypeScript
- Form components integrate with react-hook-form

### Routing Structure
The app uses React Router with the following main routes:
- `/` - Home page
- `/product` - Product features
- `/solutions` - Solutions overview
- `/interfaces` - Communication interfaces
- `/integration` - Integration options
- `/pricing` - Pricing plans
- `/blog` - Blog content
- `/contact` - Contact form

## TypeScript Configuration

The project uses a multi-config TypeScript setup:
- `tsconfig.json`: Base configuration with path mappings
- `tsconfig.app.json`: Application-specific config
- `tsconfig.node.json`: Node.js environment config (for Vite)

Type checking is performed during the build process via `tsc -b`.
# React Base

A React application template with TypeScript, testing, and development tools preconfigured.

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript definitions
└── test/          # Test configuration
```

## Available Commands

| Command                 | Description              |
| ----------------------- | ------------------------ |
| `npm run dev`           | Start development server |
| `npm run build`         | Build for production     |
| `npm run preview`       | Preview production build |
| `npm run test`          | Run tests                |
| `npm run test:coverage` | Run tests with coverage  |
| `npm run lint`          | Run linter               |
| `npm run format`        | Format code              |

## Configuration

### Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import { Button } from '@/components';
import { useLocalStorage } from '@/hooks';
```

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Variables must be prefixed with `VITE_` to be accessible in the browser.

### Docker

Build and run with Docker:

```bash
docker build -t react-base .
docker run -p 3000:80 react-base
```

Or use docker-compose:

```bash
docker-compose up
```

## Tech Stack

- React 19 with TypeScript
- Vite for build tooling
- Vitest and React Testing Library for testing
- ESLint and Prettier for code quality
- React Router for routing
- Docker for containerization

## Development

The project includes:

- Pre-commit hooks with Husky and lint-staged
- GitHub Actions CI/CD pipeline
- VS Code settings and extension recommendations
- Comprehensive test setup with examples

## Deployment

Build the project and deploy the `dist` folder:

```bash
npm run build
```

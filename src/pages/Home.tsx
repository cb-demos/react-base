import { Button } from '@/components';

export function Home() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to React Base
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          A production-ready React template with TypeScript, Vite, and modern
          tooling.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">TypeScript</h3>
          <p className="mt-2 text-sm text-gray-600">
            Built with TypeScript for type safety and better developer
            experience.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">Vite</h3>
          <p className="mt-2 text-sm text-gray-600">
            Fast development server and optimized builds with Vite.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">Testing</h3>
          <p className="mt-2 text-sm text-gray-600">
            Comprehensive testing setup with Vitest and React Testing Library.
          </p>
        </div>
      </div>
    </div>
  );
}

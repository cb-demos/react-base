export function About() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          About
        </h1>
        <div className="mt-6 text-lg text-gray-600 space-y-4">
          <p>
            This is a comprehensive React template built with modern tools and
            best practices. It provides a solid foundation for building scalable
            React applications.
          </p>

          <p>The template includes:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>React 19 with TypeScript</li>
            <li>Vite for fast development and building</li>
            <li>ESLint and Prettier for code quality</li>
            <li>Vitest and React Testing Library for testing</li>
            <li>Husky and lint-staged for git hooks</li>
            <li>Docker configuration for containerization</li>
            <li>GitHub Actions for CI/CD</li>
            <li>Path aliases for clean imports</li>
            <li>VS Code configuration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

# Contributing to Zed UI

First off, thank you for considering contributing to Zed UI! It's people like you who make Zed UI better for everyone.

Below are the guidelines for contributing to this project.

## 🌈 Our Philosophy

Zed UI is focused on **high-fidelity** and **premium motion**. We prioritize:
1. **Visual Excellence**: Does it look "wow"?
2. **Smooth Interactions**: Is the animation fluid and intentional?
3. **Developer Experience**: Is the code clean and easy to customize?

## 🛠️ Local Development Setup

1. **Fork and clone** the repository.
2. **Install dependencies**:
   ```bash
   pnpm install
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/amazing-new-component
   ```
4. **Run the dev server**:
   ```bash
   pnpm dev
   ```

## 📜 Coding Standards

- **TypeScript**: All new components must be written in TypeScript with proper interfaces.
- **Tailwind CSS**: Use Tailwind classes for styling. Avoid inline styles unless necessary for dynamic values.
- **Framer Motion**: Use `motion` for animations. Keep transitions smooth and consistent.
- **Linting & Formatting**: We use [Biome](https://biomejs.dev/). You can run the check with:
  ```bash
  pnpm lint
  ```

## 🧱 Adding a New Component

If you're adding a new component to the registry:
1. Create the component file in `src/registry/ui/`.
2. Add it to the registry index in `src/registry/index.ts`.
3. Create a documentation page in `src/content/[component].mdx`.

## 📬 Pull Request Process

1. Ensure your code follows the coding standards.
2. Update the documentation if you've added or modified features.
3. Submit a PR with a clear title and description of what you've changed.
4. Wait for review!

## 🐛 Reporting Bugs & Suggestions

- Use **GitHub Issues** to report bugs or suggest new features.
- Provide as much detail as possible, including steps to reproduce bugs.

---

Thank you for being part of the Zed UI community! 🚀

# Zed UI: Build and Launch Your Own Component Library

Welcome to **Zed UI**! This guide will walk you through the process of building, expanding, and launching your own component library based on this documentation site.

## 1. Project Overview
This project is a documentation site for a "copy-and-paste" component library (similar to shadcn/ui). Instead of installing a monolithic package, users copy the source code of components into their own projects.

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Radix UI Primitives
- **Content**: MDX (next-mdx-remote)

## 2. Project Structure (The "Simple" Version)
The folder structure uses Next.js **"Private Folders"** (folders starting with an underscore `_`). These are hidden from the URL and are used to organize code.

Think of the project in two halves:

### 1. The "Library" (What you are building)
- **`src/app/_components/ui/`**: This is your "Product". Every component you want to give to users goes here.
- **`src/app/_docs/`**: This is your "Database". You store `.mdx` files here. They contain the text and documentation for your components.

### 2. The "Website" (The documentation site)
- **`src/app/ui/`**: This folder handles the **URLs**.
  - **`[slug]/page.tsx`**: The "Dynamic Engine". If you go to `/ui/button`, it looks into your `_docs` folder, finds `button.mdx`, and renders it.
  - **`installation/` & `cli/`**: These have their own folders because they need special layouts, but they **still** read their text from `_docs/get-started/` to keep things centralized.
- **`src/app/_components/`**: These are "Site Utilities". Things like `Icons`, `Header`, and `Footer` that make your website work, but aren't necessarily meant for users to copy-paste.
- **`src/app/_components/mdx/`**: The "Translator". This folder tells Next.js: *"When you see a `<Button />` inside an MDX file, use the React component from our library."*

---

## 3. Adding New Components
To add a new component to Zed UI, follow these steps:

### A. Create the Component Source
Add your component file in `src/app/_components/ui/`.
Example: `src/app/_components/ui/my-new-component.tsx`

### B. Create the Documentation
Add an MDX file in `src/app/_docs/`.
Example: `src/app/_docs/my-new-component.mdx`

The MDX file should contain:
- Frontmatter (`title`, `description`, `slug`).
- Usage examples using the `<ComponentView>` and `<Tabs>` components.
- Installation instructions (CLI and Manual).

### C. Register in MDX Components
If your component needs to be rendered directly inside MDX (e.g., for live previews), import and add it to the `components` object in `src/app/_components/mdx/MDXComponents.tsx`.

## 3. Customizing Branding
You have already rebranded most of the site to **Zed UI**. To further customize:
- **Logo**: Edit `src/app/_components/Icons.tsx` (the `logo` key).
- **Colors**: Update the CSS variables in `src/styles/globals.css`.
- **Fonts**: Modify `src/utils/fonts.ts` and `src/app/layout.tsx`.

## 4. Setting up Your Own CLI (Advanced)
If you want users to run `npx zed-ui add <component>`, you will need:
1.  **A Registry**: A public JSON endpoint that lists all your components and their source code.
2.  **A CLI Package**: A Node.js package published to NPM that fetches from your registry and writes files to the user's project.

For a simpler approach, users can just copy-paste from your documentation site.

## 5. Deployment
The easiest way to launch your library is to deploy the documentation site:

1.  Push your code to a GitHub repository.
2.  Connect the repository to [Vercel](https://vercel.com).
3.  Vercel will automatically detect Next.js and deploy your site.

## 6. Maintenance
- **Keep Dependencies Lean**: When adding new components, try to reuse existing dependencies like `motion` or `radix-ui` primitives to keep the user's bundle size small.
- **Update the "Updates" Page**: Log new additions in `src/app/_docs/updates/` to keep your users informed.

## 7. Launch Checklist
- [ ] Update all metadata in `src/app/layout.tsx`.
- [ ] Change the GitHub link in `src/app/ui/_components/Header.tsx`.
- [ ] Add your first custom component.
- [ ] Deploy to a custom domain (e.g., `zed-ui.com`).

Happy building!

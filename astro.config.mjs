import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Tauri",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/tauri-apps/tauri",
        discord: "https://github.com/tauri-apps/tauri",
        mastodon: "https://github.com/tauri-apps/tauri",
        twitter: "https://github.com/tauri-apps/tauri",
      },
      editLink: {
        baseUrl: "https://github.com/tauri-apps/tauri-docs/edit/dev",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Quick Start",
          autogenerate: { directory: "start" },
        },
        {
          label: "Core concepts",
          collapsed: true,
          items: [
            {
              label: "Architecture",
              collapsed: true,
              autogenerate: { directory: "core/architecture", collapsed: false },
            },
            {
              label: "Features",
              collapsed: true,
              autogenerate: { directory: "core/features", collapsed: true },
            },
          ]
        },
        {
          label: "Basics",
          collapsed: true,
          items: [
            {
              label: "Web",
              collapsed: true,
              autogenerate: { directory: "basic/web", collapsed: true },
            },
            {
              label: "Rust",
              collapsed: true,
              autogenerate: { directory: "basic/rust", collapsed: true },
            }
          ]
        },
        {
          label: "Guides",
          collapsed: true,
          items: [
            {
              label: "Developing",
              collapsed: true,
              autogenerate: { directory: "guide/develop", collapsed: true },
            },
            {
              label: "Debugging",
              collapsed: true,
              autogenerate: { directory: "guide/debug", collapsed: true },
            },
            {
              label: "Testing",
              collapsed: true,
              autogenerate: { directory: "guide/test", collapsed: true },
            },
            {
              label: "Building",
              collapsed: true,
              autogenerate: { directory: "guide/build", collapsed: true },
            },
            {
              label: "Distributing",
              collapsed: true,
              autogenerate: { directory: "guide/distribute", collapsed: true },
            },
            {
              label: "CI/CD",
              collapsed: true,
              autogenerate: { directory: "guide/ci-cd", collapsed: true },
            },
            {
              label: "Security",
              collapsed: true,
              autogenerate: { directory: "guide/security", collapsed: true },
            },
            {
              label: "Legal",
              collapsed: true,
              autogenerate: { directory: "guide/legal", collapsed: true },
            },
          ],
        },
        {
          label: "Recipes",
          collapsed: true,
          autogenerate: { directory: "recipes", collapsed: true },
        },
        { 
          label: "Plugins",
          collapsed: true,
          autogenerate: { directory: "plugins", collapsed: true },
        },
        {
          label: "Migrate",
          collapsed: true,
          autogenerate: { directory: "migrate", collapsed: true },
        },
        {
          label: "References",
          collapsed: true,
          autogenerate: { directory: "references", collapsed: true },
        },
      ],
    }),
  ],
  markdown: {
    shikiConfig: {
      langs: ["powershell"],
    },
  },
  experimental: {
    assets: true
  },
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});

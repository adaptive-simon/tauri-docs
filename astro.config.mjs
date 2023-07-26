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
          autogenerate: { directory: "3/start", collapsed: true },
        },
        {
          label: "Core concepts",
          collapsed: true,
          items: [
            {
              label: "Architecture",
              autogenerate: { directory: "3/core/architecture" },
            },
            {
              label: "Features",
              autogenerate: { directory: "3/core/features", collapsed: true },
            },
          ]
        },
        {
          label: "Basics",
          collapsed: true,
          items: [
            {
              label: "Web",
              autogenerate: { directory: "3/basic/web", collapsed: true },
            },
            {
              label: "Rust",
              autogenerate: { directory: "3/basic/rust", collapsed: true },
            }
          ]
        },
        {
          label: "Guides",
          collapsed: true,
          items: [
            {
              label: "Developing",
              autogenerate: { directory: "3/guide/develop", collapsed: true },
            },
            {
              label: "Debugging",
              autogenerate: { directory: "3/guide/debug", collapsed: true },
            },
            {
              label: "Testing",
              autogenerate: { directory: "3/guide/test", collapsed: true },
            },
            {
              label: "Building",
              autogenerate: { directory: "3/guide/build", collapsed: true },
            },
            {
              label: "Distributing",
              autogenerate: { directory: "3/guide/distribute", collapsed: true },
            },
            {
              label: "CI/CD",
              autogenerate: { directory: "3/guide/ci-cd", collapsed: true },
            },
            {
              label: "Security",
              autogenerate: { directory: "3/guide/security", collapsed: true },
            },
            {
              label: "Legal",
              autogenerate: { directory: "3/guide/legal", collapsed: true },
            },
          ],
        },
        {
          label: "Recipes",
          collapsed: true,
          autogenerate: { directory: "3/recipes", collapsed: true },
        },
        { 
          label: "Plugins",
          collapsed: true,
          autogenerate: { directory: "3/plugins", collapsed: true },
        },
        {
          label: "Migrate",
          collapsed: true,
          autogenerate: { directory: "3/migrate", collapsed: true },
        },
        {
          label: "References",
          collapsed: true,
          autogenerate: { directory: "3/references", collapsed: true },
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

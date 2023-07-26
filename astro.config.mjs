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
          autogenerate: { directory: "3/core", collapsed: true },
        },
        {
          label: "Guides",
          collapsed: true,
          items: [
            {
              label: "Develop",
              autogenerate: { directory: "3/guide/develop", collapsed: true },
            },
            {
              label: "Build",
              autogenerate: { directory: "3/guide/build", collapsed: true },
            },
            {
              label: "Test",
              autogenerate: { directory: "3/guide/test", collapsed: true },
            },
            {
              label: "CI/CD",
              autogenerate: { directory: "3/guide/ci-cd", collapsed: true },
            },
            {
              label: "Distribute",
              autogenerate: { directory: "3/guide/distribute", collapsed: true },
            },
            {
              label: "Rust",
              autogenerate: { directory: "3/guide/rust", collapsed: true },
            },
            {
              label: "Javascript",
              autogenerate: { directory: "3/guide/javascript", collapsed: true },
            },
          ],
        },
        {
          label: "Recipes",
          collapsed: true,
          autogenerate: { directory: "2/recipes", collapsed: true },
        },
        { 
          label: "Plugins",
          collapsed: true,
          autogenerate: { directory: "2/plugins", collapsed: true },
        },
        {
          label: "References",
          collapsed: true,
          items: [
            {
              label: "Command Line Interface (CLI)",
              link: "#",
            },
            {
              label: "Tauri Config",
              link: "#",
            },
            {
              label: "JavaScript API",
              link: "#",
            },
            {
              label: "Rust API",
              link: "#",
            },
          ],
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

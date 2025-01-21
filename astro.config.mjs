// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      API_URL: envField.enum({
        context: "client",
        access: "public",
        values: ["foo", "bar", "baz"],
        optional: true,
        default: "baz",
      }),
      PORT: envField.number({
        context: "server",
        access: "public",
        default: 4321,
      }),
      API_SECRET: envField.string({ context: "server", access: "secret" }),
    },
  },

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
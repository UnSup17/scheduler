import type { APIRoute } from 'astro';

import { PUBLIC_APP_VERSION } from "astro:env/server"

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      appVersion: PUBLIC_APP_VERSION,
    })
  )
}
import { defineConfig } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import { mkdirSync } from 'node:fs'

process.env.PLAYWRIGHT_BROWSERS_PATH ??= fileURLToPath(new URL('./node_modules/.playwright-browsers', import.meta.url))
process.env.TMPDIR = fileURLToPath(new URL('./node_modules/.playwright-tmp', import.meta.url))
mkdirSync(process.env.TMPDIR, { recursive: true })

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.mjs',
  timeout: 90000,
  workers: 1,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
    launchOptions: { args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] },
  },
  webServer: {
    command: 'npm run dev -- --port 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
  },
})

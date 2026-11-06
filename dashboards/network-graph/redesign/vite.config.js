import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: fileURLToPath(new URL('./src', import.meta.url)),
  base: './',
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true,
    modulePreload: false,
    rollupOptions: { output: { format: 'iife' } },
  },
  plugins: [{
    name: 'standalone-html',
    apply: 'build',
    async closeBundle() {
      const output = new URL('./dist/', import.meta.url);
      let html = await readFile(new URL('index.html', output), 'utf8');
      const scripts = [];

      // Inline compiled assets so index.html also works without a Vite server.
      for (const match of html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g)) {
        const script = await readFile(new URL(match[1], output), 'utf8');
        scripts.push(`<script>${script.replace(/<\/script/gi, '<\\/script')}</script>`);
        html = html.replace(match[0], '');
      }
      for (const match of html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)) {
        const css = await readFile(new URL(match[1], output), 'utf8');
        html = html.replace(match[0], () => `<style>${css}</style>`);
      }

      html = html.replace('</body>', () => `${scripts.join('\n')}\n  </body>`);
      html = html.replace(/^[\t ]+$/gm, '');

      await writeFile(new URL('index.html', output), html);
      await writeFile(new URL('./index.html', import.meta.url), html);
    },
  }],
});

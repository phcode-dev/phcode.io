import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, existsSync, cpSync } from 'fs';

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms-of-service.html'),
      },
    },
    // Minification settings (enabled by default in production)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
      },
    },
  },
  publicDir: false, // Disable automatic public dir copying
  plugins: [{
    name: 'copy-static-files',
    closeBundle() {
      // Copy assets folder preserving directory structure
      if (existsSync('assets')) {
        cpSync('assets', 'docs/assets', { recursive: true });
        console.log('✓ Copied assets/ to docs/assets/');
      }

      // Copy CNAME and robots.txt to docs/
      const filesToCopy = ['CNAME', 'robots.txt'];
      filesToCopy.forEach(file => {
        if (existsSync(file)) {
          copyFileSync(file, `docs/${file}`);
          console.log(`✓ Copied ${file}`);
        }
      });
    }
  }]
});

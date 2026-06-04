// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/stories-astro/',
  
  // 💡 加上下面這段設定，強制把 _astro 改名成 assets！
  build: {
    assets: 'assets',
  },
});
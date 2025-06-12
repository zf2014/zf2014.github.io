import { defineConfig } from 'vitepress';
import VueDevTools from 'vite-plugin-vue-devtools';
import UnocssPlugin from 'unocss/vite';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    logo: '/logo.svg',
  },
  title: 'zf2014',
  description: 'zf2014',

  vite: {
    plugins: [VueDevTools(), UnocssPlugin()],
  },

  // 移除markdown.theme配置以使用默认主题
});

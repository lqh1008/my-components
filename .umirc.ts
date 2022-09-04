import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/pages/index',
    },
    {
      path: '/index-list', component: '@/pages/index-list/index'
    },
    {
      path: '/drag-upload', component: '@/pages/drag-upload/index'
    },
  ],
  fastRefresh: {},
  extraPostCSSPlugins: [require("tailwindcss"), require("autoprefixer")],
});

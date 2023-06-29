import { createSSRApp } from 'vue';
import App from './App.vue';
import store from '@/store';
// @ts-ignore
import uviewPlus from 'uview-plus';

export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  app.use(store);
  return {
    app,
  };
}

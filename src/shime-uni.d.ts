import type { App } from 'vue';
export {};

declare module 'vue' {
  // eslint-disable-next-line no-undef
  type Hooks = App.AppInstance & Page.PageInstance;
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomOptions extends Hooks {}
}

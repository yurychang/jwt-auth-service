import { Plugin } from 'vue';

import { JwtAuthStore } from '..';
import { JwtAuthStoreOptions } from '../jwt-auth-store';
import { injectionKey } from './injectionKey';

export const createStore = (options: JwtAuthStoreOptions) => {
  const store = new JwtAuthStore(options);

  return {
    install: (app) => {
      app.provide<JwtAuthStore>(injectionKey, store);
    },
  } as Plugin;
};

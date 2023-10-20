<template>
  <slot />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';

import { JWTAuthStore } from '@/core/jwt-auth-store';

import { injectionKey, JWTAuthContext } from './injection-key';

const props = defineProps({
  store: {
    type: JWTAuthStore,
    required: true,
  },
});
const store = props.store;

const isAuthenticated = ref(store.isAuthenticated);
const token = ref(store.getToken());

store.subscribe((_token) => {
  isAuthenticated.value = store.isAuthenticated;
  token.value = _token;
});

const context = {
  isAuthenticated,
  token,
  getToken: store.getToken.bind(store),
  setToken: store.setToken.bind(store),
  clearToken: store.clearToken.bind(store),
};
provide<JWTAuthContext>(injectionKey, context);
</script>

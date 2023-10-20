<template>
  <slot />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';

import { JwtAuthStore } from '../core/jwt-auth-store';
import { injectionKey, JwtAuthContext } from './injection-key';

const props = defineProps({
  store: {
    type: JwtAuthStore,
    required: true,
  },
});
const store = props.store;
const isAuthenticated = ref(store.isAuthenticated);

store.subscribe(() => {
  isAuthenticated.value = store.isAuthenticated;
});

const context = {
  isAuthenticated,
  getToken: store.getToken.bind(store),
  setToken: store.setToken.bind(store),
  clearToken: store.clearToken.bind(store),
};
provide<JwtAuthContext>(injectionKey, context);
</script>

<template>
  <jwt-auth-provider :store="store">
    <child-consumer />
  </jwt-auth-provider>
</template>

<script setup lang="ts">
import { JWTAuthStore } from '@yurychang/jwt-auth';
import { JwtAuthProvider } from '@yurychang/jwt-auth/vue';

import ChildConsumer from "./child-consumer.vue";

const store = new JWTAuthStore();
</script>

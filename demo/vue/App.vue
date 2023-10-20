<template>
  <jwt-auth-provider :store="store">
    <child-consumer />
  </jwt-auth-provider>
</template>

<script setup lang="ts">
import { JWTAuthStore } from '@/core/jwt-auth-store';
import JwtAuthProvider from '@/vue/jwt-auth-provider.vue';

import ChildConsumer from "./child-consumer.vue";

const store = new JWTAuthStore();
</script>

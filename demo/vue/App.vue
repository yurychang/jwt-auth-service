<template>
  <child-consumer />
  <jwt-auth-provider :store="store" />
</template>

<script setup lang="ts">
import { JwtAuthStore } from '@/core/jwt-auth-store';
import JwtAuthProvider from '@/vue/jwt-auth-provider.vue';

import ChildConsumer from "./child-consumer.vue";

const store = new JwtAuthStore();
</script>

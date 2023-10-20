<template>
  isAuthenticated: {{ isAuthenticated }}
  <br>
  token: {{ token }}
  <br>
  <button @click="setToken('access_token')">
    setToken
  </button>
  <button @click="clearToken">
    clearToken
  </button>
</template>

<script setup lang="ts">
import { useJWT } from '@/vue/use-jwt';

const { isAuthenticated, token, setToken, clearToken } = useJWT();
</script>

<style scoped></style>
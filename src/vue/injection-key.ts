import type { InjectionKey, Ref } from 'vue';

import { JwtAuthStore } from '../core/jwt-auth-store';

export interface JwtAuthContext {
  isAuthenticated: Ref<JwtAuthStore['isAuthenticated']>;
  getToken: JwtAuthStore['getToken'];
  setToken: JwtAuthStore['setToken'];
  clearToken: JwtAuthStore['clearToken'];
}

export const injectionKey = Symbol(
  'jwt-auth-store',
) as InjectionKey<JwtAuthContext>;

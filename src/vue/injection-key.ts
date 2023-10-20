import type { InjectionKey, Ref } from 'vue';

import { JWTAuthStore } from '../core/jwt-auth-store';

export interface JWTAuthContext {
  isAuthenticated: Ref<JWTAuthStore['isAuthenticated']>;
  token: Ref<string | null>;
  getToken: JWTAuthStore['getToken'];
  setToken: JWTAuthStore['setToken'];
  clearToken: JWTAuthStore['clearToken'];
}

export const injectionKey = Symbol(
  'jwt-auth-store',
) as InjectionKey<JWTAuthContext>;

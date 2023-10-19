import { AxiosRequestConfig } from 'axios';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { JwtAuthStore } from './jwt-auth-store';
import { jwtReqInterceptor } from './jwt-interceptor';

describe('jwtReqInterceptor', () => {
  let authStore: JwtAuthStore;

  beforeEach(() => {
    authStore = new JwtAuthStore();
  });

  afterEach(() => {
    authStore.clearToken();
  });

  it('should add an Authorization header with the JWT token to the request config', () => {
    authStore.setToken('my-jwt-token');
    const requestConfig: AxiosRequestConfig = {};
    const updatedConfig = jwtReqInterceptor(authStore)(requestConfig);
    expect(updatedConfig.headers).toEqual({
      Authorization: 'Bearer my-jwt-token',
    });
  });

  it('should not add an Authorization header if no JWT token is set', () => {
    const requestConfig: AxiosRequestConfig = {};
    const updatedConfig = jwtReqInterceptor(authStore)(requestConfig);
    expect(updatedConfig.headers?.Authorization).toBeUndefined();
  });
});

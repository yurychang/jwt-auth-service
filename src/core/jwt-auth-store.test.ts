import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { JWTAuthStore } from './jwt-auth-store';

describe('AuthStore', () => {
  let authStore: JWTAuthStore;

  beforeEach(() => {
    authStore = new JWTAuthStore();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('isAuthenticated', () => {
    it('should return true if token is set', () => {
      const token = 'my_token';

      authStore.setToken(token);

      expect(authStore.isAuthenticated).toBeTruthy();
    });

    it('should return false if token is not set', () => {
      expect(authStore.isAuthenticated).toBeFalsy();
    });
  });

  describe('getToken', () => {
    it('should return null if token is not set', () => {
      expect(authStore.getToken()).toBeNull();
    });

    it('should return the token if it is set', () => {
      const token = 'my_token';

      localStorage.setItem('jwt_token', token);

      expect(authStore.getToken()).toEqual(token);
    });
  });

  describe('setToken', () => {
    it('should set the token in local storage', () => {
      const token = 'my_token';

      authStore.setToken(token);

      expect(localStorage.getItem('jwt_token')).toEqual(token);
    });
  });

  describe('clearToken', () => {
    it('should remove the token from local storage', () => {
      localStorage.setItem('jwt_token', 'my_token');

      authStore.clearToken();

      expect(localStorage.getItem('jwt_token')).toBeNull();
    });
  });
});

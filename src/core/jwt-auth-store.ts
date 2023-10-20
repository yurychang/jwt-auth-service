import { Subscribable } from './subscribale';

export interface JwtAuthStoreOptions {
  key?: string;
}

const defaultOptions = {
  key: 'jwt_token',
};

export class JwtAuthStore extends Subscribable {
  private TOKEN_KEY: string;

  constructor(options: JwtAuthStoreOptions = {}) {
    super();
    const { key } = {
      ...defaultOptions,
      ...options,
    };
    this.TOKEN_KEY = key;
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.notify(token);
  }

  clearToken() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.notify(null);
  }
}

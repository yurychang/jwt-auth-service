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

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.notify(token);
  }

  public clearToken() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.notify(null);
  }
}

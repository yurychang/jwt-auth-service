export interface JwtAuthStoreOptions {
  key?: string;
}

const defaultOptions = {
  key: 'jwt_token',
};

export class JwtAuthStore {
  private TOKEN_KEY: string;

  constructor(options: JwtAuthStoreOptions = {}) {
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
  }

  public clearToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

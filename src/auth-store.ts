export class AuthStore {
  private readonly TOKEN_KEY = 'jwt_token';

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

import { AxiosRequestConfig } from 'axios';

import { JwtAuthStore } from './jwt-auth-store';

export function jwtReqInterceptor(AuthStore: JwtAuthStore) {
  return (req: AxiosRequestConfig) => {
    const token = AuthStore.getToken();
    if (token) {
      req.headers = req.headers || {};
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  };
}

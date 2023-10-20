import { AxiosRequestConfig } from 'axios';

import { JWTAuthStore } from './jwt-auth-store';

export function JWTReqInterceptor(AuthStore: JWTAuthStore) {
  return (req: AxiosRequestConfig) => {
    const token = AuthStore.getToken();
    if (token) {
      req.headers = req.headers || {};
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  };
}

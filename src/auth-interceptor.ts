import { AxiosRequestConfig } from 'axios';

import { AuthStore } from './auth-store';

export function authReqInterceptor(AuthStore: AuthStore) {
  return (req: AxiosRequestConfig) => {
    const token = AuthStore.getToken();
    if (token) {
      req.headers = req.headers || {};
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  };
}

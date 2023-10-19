import type { InjectionKey } from 'vue';

export const injectionKey = Symbol('jwt-auth-store') as InjectionKey<string>;

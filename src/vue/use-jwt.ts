import { inject } from 'vue';

import { injectionKey } from './injection-key';

export const useJWT = () => {
  const context = inject(injectionKey);
  if (!context) throw new Error('No JWT Auth Context provided!');
  return context;
};

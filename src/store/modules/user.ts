import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';

const { VITE_TOKEN_KEY } = import.meta.env;
const token = useCookies().get(VITE_TOKEN_KEY as string);

interface StoreUser {
  token: string;
  info: Record<any, any>;
}

export const useUserStore = defineStore({
  id: 'appUser',
  state: (): StoreUser => ({
    token: token,
    info: {},
  }),
  getters: {
    getUserInfo(): any {
      return this.info || {};
    },
  },
  actions: {
    setInfo(info: any) {
      console.log(info)
      this.info = info ? info : '';
    },
    setToken(token: string) {
      useCookies().set(VITE_TOKEN_KEY as string, token);
    }
  },
  persist: {
    storage: sessionStorage,
    paths: ['info'],
  },
});

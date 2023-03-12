import { defineStore } from 'pinia';

export const authStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    jumpUrl: '',
  }),
  getters: {},
  actions: {
    async signin(username, password) {
      fetch('')
    },
    async signout() {},
  },
});

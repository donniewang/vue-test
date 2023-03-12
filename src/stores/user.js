import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => {},
  getters: {},
  actions: {
    async signup(username, password, email) {},
    async current() {},
  },
});

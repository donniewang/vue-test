import { defineStore } from 'pinia';
import { ref, unref, reactive, inject } from 'vue';

export const userStore = defineStore('user', () => {
  const server = inject('server');

  function signup(username, password, email) {
    console.log(unref(server));
  }

  function profile() {
    console.log(unref(server));
  }

  return {
    signup,
    profile,
  };
});

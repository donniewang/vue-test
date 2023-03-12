import { defineStore } from 'pinia';
import { ref, unref, reactive, inject } from 'vue';
import axios from 'axios';

export const authStore = defineStore('auth', () => {
  const user = reactive({});
  const jumpUrl = ref('');
  const server = inject('server');

  function signin(username, password) {
    console.log(unref(server) + '/api/auth/signin');
    const result = axios
      .get(unref(server) + '/api/auth/signin', {
        params: {
          username,
          password,
        },
      })
      .then((result) => console.log(result.data));
  }

  function signout(username, password) {
    console.log(unref(server));
  }

  return { user, jumpUrl, signin, signout };
});

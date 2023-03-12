import { defineStore } from 'pinia';
import { ref, unref, reactive, inject } from 'vue';

export const authStore = defineStore('auth', () => {
  const user = reactive({});
  const jumpUrl = ref('');
  const server = inject('server');

  function signin(username, password) {
    console.log(unref(server) + `/api/auth/signin?username=${username}&password=${password}`);
    fetch(unref(server) + `/api/auth/signin?username=${username}&password=${password}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => user.value = data)
      .catch((e) => {
        console.error(e);
      });
  }

  function signout(username, password) {
    console.log(unref(server));
  }

  return { user, jumpUrl, signin, signout };
});

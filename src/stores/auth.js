import { defineStore } from 'pinia';
import { ref, unref, reactive, inject } from 'vue';

export const authStore = defineStore('auth', () => {
  const user = reactive({});
  const jumpUrl = ref('');
  const server = inject('server');

  function signin(username, password) {
    console.log(unref(server) + '/api/auth/signin');

    // fetch(unref(server) + '/api/auth/signin')
    //   .then((res) => {
    //     console.log('111');
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  }

  function signout(username, password) {
    console.log(unref(server));
  }

  return { user, jumpUrl, signin, signout };
});

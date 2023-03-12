<template>
  <div>home page</div>
  <div>{{ user }}</div>
  <div>{{ jumpUrl }}</div>
  <div>
    <button @click="signin('admin','123456')">signin</button>
  </div>
</template>

<script>
import { ref, unref } from 'vue';
import { authStore } from '../stores/auth';

export default {
  setup(props, context) {
    const store = authStore();

    const { user, jumpUrl, signin, signout } = store;

    return { user, jumpUrl, signin, signout };
  },
};
</script>

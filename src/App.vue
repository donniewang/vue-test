<template>
  <div id="app">
    <header>
      <a @click="native('/home')">home</a>&nbsp;|&nbsp;<a
        @click="native('/profile')"
        >profile</a
      >&nbsp;|&nbsp;<a @click="">logout</a>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import { route } from 'vue-router';

export default {
  setup() {
    function native(path) {
      this.$router.push(path);
    }

    return { native };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: rgba(0, 0, 0, 0.3);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

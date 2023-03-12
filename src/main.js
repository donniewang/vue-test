import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import { createPinia } from 'pinia';

import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'default', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: () => import('./pages/Home.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./pages/Signin.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./pages/Signup.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./pages/Profile.vue'),
    },
  ],
});

router.beforeEach((to, from) => {
  // console.log('route from', from, 'to', to);

  return true;
});

app.use(router);

app.provide(
  'server',
  'https://expresssimple9jetcr-jnqj--3010.local-credentialless.webcontainer.io'
);

app.mount('#app');

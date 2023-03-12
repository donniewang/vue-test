<template>
  <div>home page</div>
  <div @click="change">{{ count }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const change = function () {
      count.value++;
    };

    return { count, change };
  },
};
</script>

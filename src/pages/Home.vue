<template>
  <div>home page</div>
  <button @click="change">{{ count }}</button>
</template>

<script>
import { defineComponent, ref, watchEffect, watch, unref } from 'vue';

export default {
  setup(props, context) {
    console.log(props, context);

    const count = ref(0);

    function change() {
      count.value++;
    }

    return { count, change };
  },
};
</script>

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
      this.count++;
    }

    watchEffect(() => {
      console.log('watchEffect', unref(count));
    });

    watch(
      count,
      (count, prevCount) => {
        console.log('watch', count);
      },
      { deep: true }
    );

    return { count, change };
  },
};
</script>

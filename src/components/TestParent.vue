<template>
  <div>
    <span>TestSub</span>
    <TestSub
      ref="TestSub"
      v-bind:parentCount="count"
      v-on:parentCall="parentCall"
    ></TestSub>
  </div>
</template>

<script>
import TestSub from './TestSub.vue';

export default {
  components: {
    TestSub,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    parentCall() {
      this.count++;
      this.$refs.TestSub.calculate();
    },
  },
};
</script>

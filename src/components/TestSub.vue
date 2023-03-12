<template>
  <div id="test">
    <button v-on:click="calculate" v-bind:[attributeName]="isComputedDisabled">
      {{ count }}
    </button>
    <div>
      <button v-on:click="$emit('parentCall')">{{ parentCount }}</button>
    </div>
    <div>message : {{ msg }}</div>
  </div>
</template>

<script>
export default {
  inject: {
    message: {
      from: 'message',
    },
  },
  props: ['parentCount'],
  emits: ['parentCall'],
  created() {
    console.log(this.message);
  },
  mounted() {
    console.log(this.msg);
  },
  data() {
    return {
      count: 0,
      attributeName: 'disabled',
      attributeValue: false,
      isDisabled: false,
      msg: this.message,
    };
  },
  watch: {
    count(newQuestion, oldQuestion) {
      if (newQuestion > 3) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },
  },
  computed: {
    isComputedDisabled() {
      return this.isDisabled;
    },
  },
  methods: {
    calculate() {
      this.count++;
    },
  },
};
</script>

<style>
#test {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

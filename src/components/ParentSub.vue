<template>
  <div>
    <slot name="header"></slot>
  </div>
  <div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello!',
    };
  },
  components: {},
  provide() {
    return {
      message: this.message,
    };
  },
};
</script>

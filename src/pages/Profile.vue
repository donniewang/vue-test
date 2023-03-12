<template>
  <div>
    <ParentSub>
      <template #header>
        <span>header</span>
      </template>
      <template #content>
        <span>TestParent</span>
        <TestParent></TestParent>
      </template>
    </ParentSub>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    ParentSub: defineAsyncComponent(() =>
      import('../components/ParentSub.vue')
    ),
    TestParent: defineAsyncComponent(() =>
      import('../components/TestParent.vue')
    ),
  },
};
</script>

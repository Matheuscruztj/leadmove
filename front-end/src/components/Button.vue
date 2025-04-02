<template>
  <button :type="type" :disabled="disabled" :class="className">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
  button {
    cursor: pointer;
  }
</style>
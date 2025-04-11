<template>
  <table class="w-full text-left">
    <thead class="text-gray-700">
      <tr class="bg-gray-200">
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody class="text-gray-900">
      <slot name="body"></slot>
    </tbody>
  </table>
</template>

<script>
import { ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Table"
})
</script>
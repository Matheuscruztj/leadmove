<template>
  <table class="table-auto">
    <thead>
      <tr class="bg-gray-200">
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
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
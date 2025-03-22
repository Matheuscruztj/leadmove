<script lang="ts">
import { defineComponent } from 'vue';
import SidebarComponent from './components/SidebarComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    SidebarComponent,
  },
});
</script>

<template>
  <div class="flex">
    <SidebarComponent />
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">Home</h1>
      <p>Welcome to the home page</p>
    </div>
  </div>
</template>

<style scoped>
</style>

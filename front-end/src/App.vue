<script lang="ts">
import { defineComponent } from 'vue';
import SidebarComponent from './components/SidebarComponent.vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    SidebarComponent,
    Navbar,
  },
});
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <SidebarComponent />
    <div class="flex-1 flex flex-col">
      <Navbar />
      <div class="flex-1 overflow-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

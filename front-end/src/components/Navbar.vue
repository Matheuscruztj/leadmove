<template>
  <nav class="text-white w-full h-16 flex items-center justify-end px-4 relative">
    <div class="relative" @click="toggleDropdown">
      <img src="" alt="User Photo" class="w-10 h-10 rounded-full cursor-pointer" />
      <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white text-dark-gray rounded shadow-lg">
        <a href="#" class="block px-4 py-2 hover:bg-light-gray">Perfil</a>
        <a href="#" class="block px-4 py-2 hover:bg-light-gray">Configurações</a>
        <a href="#" class="block px-4 py-2 hover:bg-light-gray">Deslogar</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const dropdownOpen = ref(false);

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

    return {
      dropdownOpen,
      toggleDropdown,
    };
  },
};
</script>

<style scoped>
 nav {
  background-color: #83196e;
 }
</style>

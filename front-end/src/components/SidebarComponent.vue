<template>
  <div :class="['flex flex-col h-screen bg-purple text-white transition-all duration-300', isCollapsed ? 'w-20' : 'w-52 md:w-48']">
    <div class="flex items-center justify-between h-16 bg-purple px-4">
      <h1 class="text-2xl font-bold transition-opacity duration-300" v-if="!isCollapsed">Sidebar</h1>
      <button @click="toggleCollapse" class="text-white focus:outline-none">
        <transition name="fade" mode="out-in">
          <svg v-if="isCollapsed" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" key="collapsed">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" key="expanded">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </transition>
      </button>
    </div>
    <nav class="flex-1 px-4 py-2">
      <ul>
        <li class="py-2" v-for="item in menuItems" :key="item.name">
          <a :href=item.href class="px-4 py-2 rounded flex items-center hover:bg-pink-700 transition-all duration-300 transform hover:-translate-y-1" :class="{'opacity-0': isCollapsed, 'opacity-100': !isCollapsed}">
            <component :is="item.icon" class="h-6 w-6 mr-2" />
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { HomeIcon, CalendarIcon, PencilIcon, UserIcon, CogIcon } from '@heroicons/vue/outline';

export default defineComponent({
  name: 'SidebarComponent',
  setup() {
    const isCollapsed = ref(false);
    const menuItems = [
      { name: 'Home', icon: HomeIcon, href: '/' },
      { name: 'Scheduler', icon: CalendarIcon, href: '/scheduler' },
      { name: 'Post', icon: PencilIcon, href: '/post' },
      { name: 'User', icon: UserIcon, href: '/user' },
      { name: 'Setting', icon: CogIcon, href: '/setting' },
    ];

    const toggleCollapse = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    return {
      isCollapsed,
      toggleCollapse,
      menuItems,
    };
  },
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
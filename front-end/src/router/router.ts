import { createRouter, createWebHistory } from 'vue-router'; 
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import Scheduler from '../views/scheduler/schedule.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: Scheduler
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
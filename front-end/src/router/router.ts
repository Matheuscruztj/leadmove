import { createRouter, createWebHistory } from 'vue-router'; 
import Post from '../views/Post.vue';
import User from '../views/User.vue';
import Dashboard from '../views/Dashboard/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/post',
    name: 'post',
    component: Post
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
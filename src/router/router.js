import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'; // Import your Vue components
import AI from '../pages/Ai.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ai',
    name: 'Ai',
    component: AI, // You can use the same component for multiple routes if needed
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

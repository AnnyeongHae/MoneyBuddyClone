import { createRouter, createWebHistory } from 'vue-router';
import HomeExpense from '@/pages/HomeExpense.vue';
import HomeIncome from '@/pages/HomeIncome.vue';
import Input from '@/pages/Input.vue';
import Daily from '@/pages/Daily.vue';
import Monthly from '@/pages/Monthly.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeExpense',
      component: HomeExpense,
    },
    {
      path: '/Income',
      name: 'HomeIncome',
      component: HomeIncome,
    },
    { path: '/Input', name: 'Input', component: Input },
    { path: '/Daily', name: 'Daily', component: Daily },
    {
      path: '/Monthly',
      name: 'Monthly',
      component: Monthly,
    },
    {
      path: '/:paths(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;

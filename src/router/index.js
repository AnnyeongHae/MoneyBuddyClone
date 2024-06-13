import { createRouter, createWebHistory } from 'vue-router';
import HomeExpense from '@/pages/HomeExpense.vue';
import HomeIncome from '@/pages/HomeIncome.vue';
// 두개 페이지로 진행?
import ExpenseInput from '@/pages/ExpenseInput.vue';
import IncomeInput from '@/pages/IncomeInput.vue';
import Daily from '@/pages/Daily.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeExpense', component: HomeExpense },
    { path: '/Income', name: 'HomeIncome', component: HomeIncome },
    {
      path: '/ExpenseInput',
      name: 'ExpenseInput',
      component: ExpenseInput,
    },
    { path: '/IncomeInput', name: 'IncomeInput', component: IncomeInput },
    { path: '/Daily', name: 'Daily', component: Daily },
  ],
});

export default router;

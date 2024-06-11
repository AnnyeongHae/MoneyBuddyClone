import { createRouter, createWebHistory } from 'vue-router';
import HomeExpense from '@/pages/HomeExpense.vue';
import HomeIncome from '@/pages/HomeIncome.vue';
import Input from '@/pages/Input.vue';
import Daily from '@/pages/Daily.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/Expense', name: 'HomeExpense', component: HomeExpense },
        { path: '/Income', name: 'HomeIncome', component: HomeIncome },
        { path: '/Input', name: 'Input', component: Input },
        { path: '/Daily', name: 'Daily', component: Daily },
    ],
});

export default router;

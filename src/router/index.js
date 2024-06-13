import { createRouter, createWebHistory } from 'vue-router';
import HomeExpense from '@/pages/HomeExpense.vue';
import HomeIncome from '@/pages/HomeIncome.vue';
// 두개 페이지로 진행?
import ExpenseInput from '@/pages/ExpenseInput.vue';
import IncomeInput from '@/pages/IncomeInput.vue';
import Daily from '@/pages/Daily.vue';
import ExpenseEdit from '@/pages/ExpenseEdit.vue';
import IncomeEdit from '@/pages/IncomeEdit.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'HomeExpense', component: HomeExpense },
        { path: '/income', name: 'HomeIncome', component: HomeIncome },
        {
            path: '/expenseInput',
            name: 'ExpenseInput',
            component: ExpenseInput,
        },
        { path: '/incomeInput', name: 'IncomeInput', component: IncomeInput },
        {
            path: '/expenseEdit/:id',
            name: 'ExpenseEdit',
            component: ExpenseEdit,
        },
        { path: '/incomeEdit/:id', name: 'IncomeEdit', component: IncomeEdit },

        { path: '/daily', name: 'Daily', component: Daily },
    ],
});

export default router;

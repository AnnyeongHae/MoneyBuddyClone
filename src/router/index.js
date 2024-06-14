import { createRouter, createWebHistory } from 'vue-router';
import HomeExpense from '@/pages/HomeExpense.vue';
import HomeIncome from '@/pages/HomeIncome.vue';
import ExpenseInput from '@/pages/ExpenseInput.vue';
import IncomeInput from '@/pages/IncomeInput.vue';
import Daily from '@/pages/Daily.vue';
import ExpenseEdit from '@/pages/ExpenseEdit.vue';
import IncomeEdit from '@/pages/IncomeEdit.vue';
import Monthly from '@/pages/Monthly.vue';
import Detail from '@/pages/Detail.vue';
import PeriodicExpense from '@/pages/PeriodicExpense.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomeExpense',
            component: HomeExpense,
            meta: { showIEButton: true }, // IEButton을 보여줄 페이지
        },
        {
            path: '/Income',
            name: 'HomeIncome',
            component: HomeIncome,
            meta: { showIEButton: true }, // IEButton을 보여줄 페이지
        },
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
        {
            path: '/monthly',
            name: 'Monthly',
            component: Monthly,
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail,
        },
        {
            path: '/periodicexpense',
            name: 'PeriodicExpense',
            component: PeriodicExpense,
        },
    ],
});

export default router;

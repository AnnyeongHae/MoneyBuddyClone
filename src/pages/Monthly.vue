<template>
    <div>
        <h2 class="card-title">Monthly</h2>
        <div>
            <input
                type="month"
                id="month"
                v-model="selectedMonth"
                placeholder="Select month"
            />
            <BudgetItem v-for="s in filteredBudgets" :key="s.id" :item="s" />
        </div>
    </div>
</template>

<script setup>
import { useBudgetListStore } from '@/stores/budget';
import { ref, computed } from 'vue';
import BudgetItem from '@/components/BudgetItem.vue';

const BudgetListStore = useBudgetListStore();
const budget = computed(() => BudgetListStore.budget);

// 월별 필터링
const selectedMonth = ref('');
const filteredBudgets = computed(() => {
    const budgetList = [...budget.value].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    if (!selectedMonth.value) {
        return budgetList;
    }
    const [year, month] = selectedMonth.value.split('-');
    return budgetList.filter((item) => {
        const itemDate = new Date(item.date);
        return (
            itemDate.getFullYear() === parseInt(year) &&
            itemDate.getMonth() + 1 === parseInt(month)
        );
    });
});
</script>

<style scoped></style>

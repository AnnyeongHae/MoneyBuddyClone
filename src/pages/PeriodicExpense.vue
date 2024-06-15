<template>
    <div>
        <h2>PeriodicExpense</h2>

        <BudgetItem v-for="s in filteredBudgets" :key="s.id" :item="s" />
    </div>
</template>

<script setup>
import { useBudgetListStore } from '@/stores/budget';
import { ref, computed } from 'vue';
import BudgetItem from '@/components/BudgetItem.vue';

const BudgetListStore = useBudgetListStore();
const budget = computed(() => BudgetListStore.budget);

// 고정 지출 필터링
const filteredBudgets = computed(() => {
    const budgetList = budget.value
        .filter((item) => item.periodicExpense)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    return budgetList;
});
</script>
<style lang="scss" scoped></style>

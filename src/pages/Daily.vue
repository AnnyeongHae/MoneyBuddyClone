<template>
    <div>
        <h2>Daily</h2>
        <input
            type="date"
            id="date"
            v-model="selectedDate"
            placeholder="Select date"
        />
        <BudgetItem v-for="s in filteredBudgets" :key="s.id" :item="s" />
    </div>
</template>

<script setup>
import { useBudgetListStore } from '@/stores/budget';
import { ref, watch, computed } from 'vue';
import BudgetItem from '@/components/BudgetItem.vue';

const BudgetListStore = useBudgetListStore();
const budget = computed(() => BudgetListStore.budget);

// 일별 필터링
const selectedDate = ref('');
const filteredBudgets = computed(() => {
    const budgetList = [...budget.value].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    // if (!selectedDate.value) {
    //   return budgetList;
    // }
    const selected = new Date(selectedDate.value);
    return budgetList.filter((item) => {
        const itemDate = new Date(item.date);
        return (
            itemDate.getFullYear() === selected.getFullYear() &&
            itemDate.getMonth() === selected.getMonth() &&
            itemDate.getDate() === selected.getDate()
        );
    });
});
</script>

<style lang="scss" scoped></style>

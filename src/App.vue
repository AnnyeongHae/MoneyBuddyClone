<template>
  <div
    class="container-sm w-50 bg-warning mx-auto mt-3 p-2 margin-auto"
    style="text-align: center"
  >
    <Header />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';

// // import { computed } from 'vue';
// import { useBudgetListStore } from './stores/budget.js';
// const budgetListStore = useBudgetListStore();
// const fetchPeriodic = budgetListStore.fetchPeriodic;
// // const fetchBudget = budgetListStore.fetchBudget;
// fetchPeriodic();

// gpt
import { useBudgetListStore } from './stores/budget.js';
const budgetListStore = useBudgetListStore();
import { onMounted } from 'vue';
const { fetchPeriodic, periodic } = budgetListStore;

onMounted(async () => {
  await fetchPeriodic();
});
</script>

<style scoped></style>

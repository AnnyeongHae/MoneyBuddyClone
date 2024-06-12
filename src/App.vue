<template>
    <div class="container">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { computed, onMounted } from 'vue';
import { useBudgetListStore } from './stores/budget';

const budgetListStore = useBudgetListStore();
const fetchPeriodic = budgetListStore.fetchPeriodic;
const fetchBudget = budgetListStore.fetchBudget;

fetchPeriodic();
fetchBudget();
</script>

<style lang="scss" scoped></style>

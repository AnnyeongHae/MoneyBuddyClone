<template>
  <div
    class="container-sm w-50 bg-warning mx-auto mt-3 p-2 margin-auto"
    style="text-align: center"
  >
    <Header />
    <router-view></router-view>
    <ul>
      <!-- <li
        v-for="budgetItem in budgetList"
        :key="budgetItem.id"
      ></li> -->
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Header from '@/components/Header.vue';
// const budgetListStore = useBudgetListStore();
// const { budgetList, fetchBudgetList } = budgetListStore;
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container">
    <h2>Daily</h2>
    <button
      class="btn btn-primary ms-1"
      @click="fetchPeriodic"
    >
      새로 고침
    </button>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <li
            v-for="expense in periodicExpenses"
            :key="expense.id"
          >
            {{ expense.date }} - {{ expense.category }}:
            {{ expense.amount }} - {{ expense.memo }}
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
// import { onMounted, computed } from 'vue';
// import { useBudgetListStore } from '@/stores/budget.js';
// // Pinia store를 사용하여 budgetListStore 정의
// const budgetListStore = useBudgetListStore();
// const { fetchPeriodic } = budgetListStore;

// // 컴포넌트가 마운트될 때 fetchPeriodic 호출
// onMounted(async () => {
//   await fetchPeriodic();
// });

import { onMounted, ref } from 'vue';
import axios from 'axios';

const periodicExpenses = ref([]);

const fetchPeriodic = async () => {
  try {
    const response = await axios.get(
      'http://localhost:3000/periodicExpense'
    );
    if (response.status === 200) {
      periodicExpenses.value = response.data;
    } else {
      alert('PeriodicExpense 데이터 조회 실패');
    }
  } catch (error) {
    alert('fetchPeriodic 에러 발생 : ' + error);
  }
};
// 컴포넌트가 마운트될 때 fetchPeriodic 호출
onMounted(async () => {
  await fetchPeriodic();
});
</script>

<style lang="scss" scoped></style>

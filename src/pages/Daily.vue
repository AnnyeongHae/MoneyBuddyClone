<template>
  <div class="container">
    <h2>Daily</h2>
    <button
      class="btn btn-primary ms-1"
      @click="fetchBudget"
    >
      새로 고침
    </button>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <li v-for="expense in periodic" :key="expense.id">
            {{ expense.date }} - {{ expense.category }}:
            {{ expense.amount }} - {{ expense.memo }}

            <span
              class="float-end badge bg-secondary pointer m-1"
              @click="editExpense(expense.id)"
              >편집</span
            >
            <span
              class="float-end badge bg-secondary pointer m-1"
              @click="removeExpense(expense.id)"
              >삭제</span
            >
          </li>
        </ul>
      </div>
      <button
        class="btn btn-success mt-3"
        @click="addNewExpense"
      >
        새로운 지출 추가
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useBudgetListStore } from '@/stores/budget.js';
const budgetListStore = useBudgetListStore();
const {
  budget,
  periodic,
  fetchBudget,
  fetchPeriodic,
  addBudget,
  editBudget,
  deleteBudget,
} = budgetListStore;

// Add
const periodicExpenses = computed(() => periodic);

const addNewExpense = async () => {
  const newExpense = {
    // id: Date.now(), // 예시로 고유 ID를 생성
    date: '24.07.01',
    type: 'expense',
    category: '식비',
    amount: 30000,
    memo: '저녁 식사',
    periodicExpense: true,
  };
  await addBudget(newExpense, () => {
    alert('새로운 지출이 추가되었습니다.');
  });
};

// 지출 편집
const editExpense = async (id) => {
  const editedExpense = {
    id,
    date: '24.07.02',
    type: 'expense',
    category: '식비',
    amount: 35000,
    memo: '저녁 식사 수정',
    periodicExpense: true,
  };
  await editBudget(editedExpense, () => {
    alert('지출이 수정되었습니다.');
  });
};

// 지출 삭제
const removeExpense = async (id) => {
  await deleteBudget(id);
  alert('지출이 삭제되었습니다.');
};
// console.log('확인');
// console.log(periodicExpenses);
// console.log(budget);
// console.log('periodic', periodic);
// console.log('end');
</script>

<style scoped></style>

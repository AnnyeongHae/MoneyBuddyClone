<template>
  <div>
    <h2>예산 항목 세부 정보</h2>

    <div v-if="budgetItem">
      <p><strong>Date:</strong> {{ budgetItem.date }}</p>
      <p><strong>Type:</strong> {{ budgetItem.type }}</p>
      <p>
        <strong>Category:</strong> {{ budgetItem.category }}
      </p>
      <p>
        <strong>Pay Type:</strong> {{ budgetItem.paytype }}
      </p>
      <p>
        <strong>Amount:</strong> {{ budgetItem.amount }}
      </p>
      <p><strong>Memo:</strong> {{ budgetItem.memo }}</p>
      <p>
        <strong>Periodic Expense:</strong>
        {{ budgetItem.periodicExpense }}
      </p>
    </div>
    <div v-else>
      <p>예산 항목을 찾을 수 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useBudgetListStore } from '@/stores/budget';
import { computed, watch } from 'vue';
// 현재 라우트에서 ID를 가져옵니다.
const route = useRoute();
const budgetId = route.params.id;
console.log('ID값:', budgetId);

// BudgetListStore를 사용하여 예산 항목을 가져옵니다.
const BudgetListStore = useBudgetListStore();
const budgetIndex = computed(() =>
  BudgetListStore.budget.findIndex(
    (item) => item.id === budgetId
  )
);

// 인덱스를 사용하여 예산 항목을 가져옵니다.
const budgetItem = computed(() =>
  budgetIndex.value !== -1
    ? BudgetListStore.budget[budgetIndex.value]
    : null
);

// budgetItem의 값을 확인하기 위해 콘솔 로그 추가
watch(
  budgetItem,
  (newValue) => {
    console.log(newValue);
  },
  { immediate: true }
);
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>

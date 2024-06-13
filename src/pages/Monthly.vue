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
      <div
        class="card-text bg-primary"
        v-for="s in filteredBudgets"
        :key="s.id"
        @click="gotoDetail(s.id)"
      >
        date : {{ s.date }} <br />
        type : {{ s.type }} <br />
        category : {{ s.category }} <br />
        paytype : {{ s.paytype }} <br />
        amount : {{ s.amount }} <br />
        memo : {{ s.memo }} <br />
        periodicExpense : {{ s.periodicExpense }}
        <span
          class="float-end badge bg-secondary pointer m-1"
          @click="editBudget(s.id)"
          >편집</span
        >
        <span
          class="float-end badge bg-secondary pointer m-1"
          @click="deleteBudget(s.id)"
          >삭제</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBudgetListStore } from '@/stores/budget';
import { ref, computed, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const BudgetListStore = useBudgetListStore();
const budget = computed(() => BudgetListStore.budget);
const matchedBudgetItem = computed(() =>
  BudgetListStore.budget.find(
    (item) => item.id === parseInt(currentRoute.params.id)
  )
);
console.log('budget 불러오는지 확인 :' + matchedBudgetItem);

const { editBudget, deleteBudget } = BudgetListStore;
const router = useRouter();
const currentRoute = useRoute();
const gotoDetail = (id) => {
  router.push(`/Detail/${id}`);
};

// budget 불러오는지 확인

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

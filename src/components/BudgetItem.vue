<template>
  <div class="border" @click="gotoDetail(item.id)">
    <span>date : {{ item.date }} </span>
    type : {{ item.type }} <br />
    category : {{ item.category }} <br />
    paytype : {{ item.paytype }} <br />
    amount : {{ item.amount }} <br />
    memo : {{ item.memo }} <br />
    periodicExpense : {{ item.periodicExpense }}
    <span
      class="float-end badge bg-secondary pointer m-1"
      @click.stop="editBudget(item)"
    >
      편집
    </span>
    <span
      class="float-end badge bg-secondary pointer m-1"
      @click.stop="deleteBudget(item.id)"
    >
      삭제
    </span>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import { useBudgetListStore } from '@/stores/budget';

const router = useRouter();
const BudgetListStore = useBudgetListStore();
const { deleteBudget } = BudgetListStore;

const props = defineProps({
  item: Object,
});

const gotoDetail = (id) => {
  router.push(`/Detail/${id}`);
};

const editBudget = (item) => {
  if (item.type === 'income') {
    router.push(`/IncomeEdit/${item.id}`);
  } else if (item.type === 'expense') {
    router.push(`/ExpenseEdit/${item.id}`);
  }
};
</script>

<style scoped>
.card-text {
  margin-bottom: 1rem;
}
</style>

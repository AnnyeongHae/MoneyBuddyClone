<template>
  <form @submit.prevent="updateBudgetHandler">
    <div class="a">
      <label for="date">날짜&nbsp;</label>
      <input type="date" id="date" v-model="date" placeholder="Placeholder" />
    </div>

    <div class="app">
      <label for="category">카테고리&nbsp;</label>
      <select id="category" v-model="selectedCategory">
        <option v-for="income in incomeCategory" :value="income" :key="income">
          {{ income }}
        </option>
      </select>
    </div>

    <div class="d">
      <label for="amount">금액&nbsp;</label>
      <input
        type="number"
        v-model="amount"
        id="amount"
        placeholder="Placeholder"
      />
    </div>

    <div class="e">
      <label for="memo">메모</label>
      <br />
      <textarea v-model="memo" id="memo" placeholder="Placeholder"></textarea>
    </div>

    <div id="f">
      <button type="reset" @click="reset">다시 쓰기</button>
      <button type="submit" @click.prevent="addBudgetHandler">수정 완료</button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, reactive, watch, onMounted } from 'vue';
import { useBudgetListStore } from '../stores/budget.js';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const BudgetListStore = useBudgetListStore();
const { budget, incomeCategories, addBudget, getBudgetById, updateBudget } =
  BudgetListStore;
const incomeCategory = computed(() => incomeCategories);

// 반응형 변수 선언
const date = ref('');
const selectedCategory = ref('');
const amount = ref(0);
const memo = ref('');

// 전달 데이터 객체를 만드는 함수
const budgetItem = reactive({
  id: null,
  date: '',
  type: 'income',
  category: '',
  amount: '',
  memo: '',
});

// ID로 예산 항목을 가져와서 폼에 데이터 채우기
const fetchBudgetItem = async (id) => {
  const item = await getBudgetById(id);
  if (item) {
    budgetItem.id = item.id;
    date.value = item.date;
    selectedCategory.value = item.category;
    amount.value = item.amount;
    memo.value = item.memo;
  }
};

// 예산 항목 업데이트
const updateBudgetHandler = () => {
  budgetItem.date = date.value;
  budgetItem.type = paytype.value;
  budgetItem.category = selectedCategory.value;
  budgetItem.amount = amount.value;
  budgetItem.memo = memo.value;

  console.log('updateBudget 실행!', budgetItem);
  updateBudget({ ...budgetItem }, () => {
    router.push({ name: 'Daily' });
  });
};

const addBudgetHandler = () => {
  budgetItem.date = date.value;
  budgetItem.category = selectedCategory.value;
  budgetItem.amount = amount.value;
  budgetItem.memo = memo.value;

  console.log('addBudget 실행!', budgetItem);
  addBudget({ ...budgetItem }, () => {
    router.push({ name: 'Daily' });
  });
};

// 초기 상태로 폼 재설정
const reset = () => {
  fetchBudgetItem(route.params.id);
};

// 컴포넌트가 마운트되면 예산 항목 가져오기
onMounted(() => {
  fetchBudgetItem(route.params.id);
});
</script>

<style>
* {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

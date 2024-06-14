<template>
  <form>
    <div class="a">
      <label for="date">날짜&nbsp;</label>
      <input
        type="date"
        id="date"
        v-model="date"
        placeholder="Placeholder"
      />
    </div>

    <div class="app">
      <label for="category">카테고리&nbsp;</label>

      <select id="category" v-model="selectedCategory">
        <option
          v-for="expense in expenseCategory"
          :value="expense"
          :key="expense"
        >
          {{ expense }}
        </option>
      </select>
    </div>

    <div class="fix-button">
      <input
        type="checkbox"
        v-model="periodicExpense"
        value="false"
      />
      <span> 고정 지출 : {{ periodicExpense }} </span>
    </div>

    <div class="c">
      <label for="paytype">지불 방법&nbsp;</label>
      <select v-model="paytype" id="paytype">
        <option value="" disabled>선택</option>
        <option value="카드">카드</option>
        <option value="현금">현금</option>
        <option value="은행">은행</option>
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
      <textarea
        v-model="memo"
        id="memo"
        placeholder="Placeholder"
      ></textarea>
    </div>

    <div id="f">
      <button type="reset" @click="reset">다시 쓰기</button>
      <button
        type="submit"
        @click.prevent="addBudgetHandler"
      >
        완료
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue';
import { useBudgetListStore } from '../stores/budget.js';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const BudgetListStore = useBudgetListStore();
const { budget, expenseCategories, addBudget } =
  BudgetListStore;
const expenseCategory = computed(() => expenseCategories);

// 반응형 변수 선언
const date = ref('');
const selectedCategory = ref('');
const periodicExpense = ref(false);
const paytype = ref('');
const amount = ref(0);
const memo = ref('');

// 전달 데이터 객체를 만드는 함수
const budgetItem = reactive({
  date: '',
  type: 'expense',
  paytype: '',
  category: '',
  amount: '',
  memo: '',
  periodicExpense: '',
});

const addBudgetHandler = () => {
  budgetItem.date = date.value;
  budgetItem.paytype = paytype.value;
  budgetItem.category = selectedCategory.value;
  budgetItem.amount = amount.value;
  budgetItem.memo = memo.value;
  budgetItem.periodicExpense = periodicExpense.value;

  console.log('addBudget 실행!', budgetItem);
  addBudget({ ...budgetItem }, () => {
    router.push({ name: 'Daily' });
  });
};
</script>

<style>
* {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

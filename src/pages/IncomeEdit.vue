<template>
    <form>
        <div class="a">
            <label for="date">날짜&nbsp;</label>
            <input
                type="date"
                id="date"
                v-model="budgetItem.date"
                placeholder="Placeholder"
            />
        </div>

        <div class="app">
            <label for="category">카테고리&nbsp;</label>

            <select id="category" v-model="budgetItem.category">
                <option
                    v-for="income in incomeCategory"
                    :value="income"
                    :key="income"
                >
                    {{ income }}
                </option>
            </select>
        </div>

        <div class="d">
            <label for="amount">금액&nbsp;</label>
            <input
                type="number"
                v-model="budgetItem.amount"
                id="amount"
                placeholder="Placeholder"
            />
        </div>

        <div class="e">
            <label for="memo">메모</label>
            <br />
            <textarea
                v-model="budgetItem.memo"
                id="memo"
                placeholder="Placeholder"
            ></textarea>
        </div>

        <div id="f">
            <button type="reset" @click="reset">다시 쓰기</button>
            <button
                type="submit"
                @click.prevent="editBudgetHandler(budgetItem.id)"
            >
                편집
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
const { budget, incomeCategories, editBudget } = BudgetListStore;
const incomeCategory = computed(() => incomeCategories);

// BudgetListStore를 사용하여 예산 항목을 가져옵니다.
const budgetId = route.params.id;
console.log('budgetID:', budgetId);
const budgetItem = reactive({
    ...BudgetListStore.budget.find((item) => item.id === budgetId),
});

const editBudgetHandler = async (id) => {
    try {
        await BudgetListStore.editBudget({ ...budgetItem, id }, () => {
            router.push('/Monthly');
        });
    } catch (error) {
        alert('editBudget 에러 발생 : ' + error);
    }
};
</script>

<style>
* {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>

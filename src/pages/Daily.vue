<template>
    <div>
        <h2>Daily</h2>
        <input type="date" id="date" v-model="date" placeholder="Placeholder" />
        <div v-for="s in selectedDate" :key="s.id">
            date : {{ s.date }} <br />
            type : {{ s.type }} <br />
            category : {{ s.category }} <br />
            paytype : {{ s.paytype }} <br />
            amount : {{ s.amount }} <br />
            memo : {{ s.memo }} <br />
            periodicExpense : {{ s.periodicExpense }}
        </div>
    </div>
</template>

<script setup>
import { useBudgetListStore } from '@/stores/budget';
import { ref, watch, computed } from 'vue';

const BudgetListStore = useBudgetListStore();
const budget = computed(() => BudgetListStore.budget);

// budget 불러오는지 확인
console.log('budget 불러오는지 확인 :' + budget);

const date = ref('');
const selectedDate = ref([]);
watch(date, (dateValue) => {
    console.log('전달된 날짜값 : ' + dateValue);
    console.log('budget : ' + budget.value);
    selectedDate.value = budget.value.filter(
        (datebudget) => datebudget.date === dateValue
    );
    console.log('selectedDate : ' + selectedDate.value);
});
</script>

<style lang="scss" scoped></style>

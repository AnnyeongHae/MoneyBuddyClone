<template>
    <div :class="['border', borderClass]" @click="gotoDetail(item.id)">
        <span>date : {{ item.date }} </span> <br />
        <b>category : {{ item.category }} <br /></b>
        <!-- paytype : {{ item.paytype }} <br /> -->
        amount : {{ item.amount }} <br />
        <!-- memo : {{ item.memo }} <br /> -->
        <!-- type : {{ item.type }} <br /> -->
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
import { defineProps, computed } from 'vue';
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

const borderClass = computed(() => {
    return {
        'border-blue': props.item.type === 'income',
        'border-red': props.item.type === 'expense',
    };
});
</script>

<style scoped>
.card-text {
    margin-bottom: 1rem;
}
.border {
    border-width: 2px;
    border-style: solid;
    padding: 1rem;
    margin-bottom: 1rem;
}
.border-blue {
    border-color: blue !important;
    border-width: 2px !important;
}
.border-red {
    border-color: red !important;
    border-width: 2px !important;
}
</style>

<template>
    <div class="container">
        <button class="btn btn-primary" @click="gotoExpense">지 출</button>
        &nbsp;&nbsp;<button class="btn btn-primary" @click="gotoIncome">
            수 입
        </button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const currentRoute = useRouter();
const gotoExpense = () => {
    currentRoute.push('/Expense');
};
const gotoIncome = () => {
    currentRoute.push('/Income');
};
</script>

<style lang="scss" scoped></style>

<template>
    <div style="text-align: center" class="container">
        <button
            class="btn"
            :class="{ active: isActive('/') }"
            @click="gotoExpense"
        >
            지 출
        </button>
        &nbsp;&nbsp;
        <button
            class="btn"
            :class="{ active: isActive('/Income') }"
            @click="gotoIncome"
        >
            수 입
        </button>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isActive = (path) => route.path === path;

const gotoExpense = () => {
    router.push('/');
};

const gotoIncome = () => {
    router.push('/Income');
};
</script>

<style scoped>
.btn {
    padding: 10px 20px;
    border: none;
    background-color: gainsboro;
    color: black;
    cursor: pointer;
    font-size: 1em;
    border-radius: 10px;
}

.btn.active {
    font-weight: bold;
    background-color: black;
    color: yellow;
}
</style>

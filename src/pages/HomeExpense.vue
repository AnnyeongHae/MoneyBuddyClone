<template>
    <IEButton />
    <div class="categories">
        <button
            v-for="category in categories"
            :key="category"
            :class="{ active: selectedCategory === category }"
            @click="redirectToInput(category)"
        >
            {{ category }}
        </button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IEButton from '@/components/IEButton.vue';

// 카테고리 배열을 ref로 정의
const categories = ref([
    '식비',
    '생활용품',
    '패션미용',
    '문화생활',
    '교육',
    '의료비',
    '교통비',
    '공과금',
    '기타',
]);

// 선택된 카테고리도 ref로 정의
const selectedCategory = ref('');

// Vue Router 사용 설정
const router = useRouter();

// 카테고리 선택 후 리다이렉트하는 함수 정의
const redirectToInput = (category) => {
    selectedCategory.value = category;
    // 카테고리를 query parameter로 전달하여 '/input' 경로로 이동
    router.push({ name: 'ExpenseInput', query: { category } });
};
</script>
<style scoped>
.categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
.categories button {
    padding: 20px;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 1em;
    border-radius: 10px;
}
.categories button.active {
    background-color: grey;
}
</style>

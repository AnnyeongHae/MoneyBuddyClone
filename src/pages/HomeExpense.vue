<template>
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

<script>
export default {
  data() {
    return {
      categories: [
        '식비',
        '생활용품',
        '패션미용',
        '문화생활',
        '교육',
        '의료비',
        '교통비',
        '공과금',
        '기타',
      ],
      selectedCategory: '',
    };
  },
  methods: {
    redirectToInput(category) {
      // 카테고리를 query parameter로 전달하여 '/input' 경로로 이동
      this.$router.push({ path: '/input', query: { category } });
    },
  },
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

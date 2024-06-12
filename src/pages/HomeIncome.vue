<template>
  <div class="categories">
    <button
      v-for="category in categories"
      :key="category"
      :class="{ active: selectedCategory === category }"
      @click="selectCategory(category)"
    >
      {{ category }}
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isExpense: true,
      categories: [
        '월급',
        'Button 1',
        'Button 2',
        'Button 3',
        'Button 4',
      ],
      selectedCategory: '',
    };
  },
  methods: {
    setExpense(value) {
      this.isExpense = value;
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
<style scoped>
.expense-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav ul {
  display: flex;
  list-style-type: none;
}
nav ul li {
  margin-right: 20px;
}
nav ul li a {
  text-decoration: none;
  color: black;
}
.icons span {
  margin-left: 10px;
  font-size: 1.5em;
}
.transaction-type {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.transaction-type button {
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.transaction-type button.active {
  background-color: black;
  color: white;
}
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

<template>
  <form>
    <div class="a">
      <label for="date">날짜&nbsp;</label>
      <input type="date" v-model="date" id="date" placeholder="Placeholder" />
    </div>

    <div class="app">
      <label for="category">카테고리&nbsp;</label>

      <select v-model="selectedCategory">
        <option value="">카테고리를 선택하세요</option>

        <option
          v-for="category in categories"
          :value="category.id"
          :key="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="fix-button">
      <button @click="periodicExpense">고정</button>
    </div>

    <div class="c">
      <label for="paymentMethod">지불 방법&nbsp;</label>
      <select v-model="paymentMethod" id="paymentMethod">
        <option value="" disabled>선택</option>
        <option value="card">카드</option>
        <option value="cash">현금</option>
        <option value="bank">은행</option>
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
      <button type="submit" @click="submit">완료</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedCategory: '',
      categories: [
        { id: 1, name: '식비' },
        { id: 2, name: '생활용품' },
        { id: 3, name: '패션미용' },
        { id: 4, name: '문화생활' },
        { id: 5, name: '교육' },
        { id: 6, name: '의료비' },
        { id: 7, name: '교통비' },
        { id: 8, name: '공과금' },
        { id: 9, name: '기타' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

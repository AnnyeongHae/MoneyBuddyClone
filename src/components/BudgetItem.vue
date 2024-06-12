<template>
  <div class="form-group">
    <label for="date">날짜</label>
    <input type="date" v-model="date" id="date" placeholder="Placeholder" />
  </div>

  <div class="entry">
    <div class="entry-header">
      <span>금액</span>
      <div class="entry-actions">
        <button class="edit-button">편집</button>
        <button class="delete-button">삭제</button>
      </div>
    </div>

    <div class="entry-body">
      <span>카테고리</span>
    </div>
    &nbsp;&nbsp;&nbsp;
  </div>
  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
  <div class="entry">
    <div class="entry-header">
      <span>금액</span>
      <div class="entry-actions">
        <button class="edit-button">편집</button>
        <button class="delete-button">삭제</button>
      </div>
    </div>

    <div class="entry-body">
      <span>카테고리</span>
    </div>
    &nbsp;&nbsp;&nbsp;
  </div>
  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
  <div class="entry">
    <div class="entry-header">
      <span>금액</span>
      <div class="entry-actions">
        <button class="edit-button">편집</button>
        <button
          class="delete-button"
          key:class="btn btn primary m-1"
          @click="router.push('/Daily')"
        >
          삭제
        </button>
      </div>
    </div>

    <div class="entry-body">
      <span>카테고리</span>
    </div>
    &nbsp;&nbsp;&nbsp;
  </div>
</template>

<script>
export default {
  name: 'Daily',
};
</script>

<style scoped>
.date-label {
  margin-bottom: 5px;
}

.date-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.entry {
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 4px;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
}

.entry-actions button {
  margin-left: 5px;
}

.entry-body {
  padding-top: 5px;
}
</style>

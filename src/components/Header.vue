<template>
  <div class="container">
    <h3>
      <span class="float-end m-2">
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-gear"></i
      ></span>
    </h3>
    <h1 style="text-align: center">MoneyBuddy</h1>
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <a
          class="nav-link active pointer"
          @click="gotoExpense"
          >Home</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link pointer" @click="gotoDaily"
          >Daily</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Monthly</a>
      </li>
    </ul>
    <hr />
    <IEButton />
    <hr />
    <ul>
      <router-link
        :to="{ name: 'HomeExpense' }"
      ></router-link>
    </ul>
  </div>
</template>

<script setup>
import IEButton from './IEButton.vue';

import { useRouter } from 'vue-router';

const currentRoute = useRouter();
const gotoDaily = () => {
  currentRoute.push('/Daily');
};
const gotoExpense = () => {
  currentRoute.push('/');
};
</script>

<style>
.container .nav .nav-item {
  margin: 5px;
  background-color: transparent;
  font-weight: bold;
}

.container .nav .nav-link {
  color: grey;
}
.container .nav .active {
  background-color: transparent;
  color: black;
}
</style>

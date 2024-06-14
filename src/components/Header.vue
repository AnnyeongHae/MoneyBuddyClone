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
                <router-link class="nav-link pointer" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link pointer" to="/Daily"
                    >Daily</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/Monthly"
                    >Monthly</router-link
                >
            </li>
        </ul>
        <hr />
        <div v-if="showIEButton">
            <IEButton />
            <hr />
        </div>
        <ul>
            <router-link :to="{ name: 'HomeExpense' }"></router-link>
        </ul>
    </div>
</template>

<script setup>
import IEButton from './IEButton.vue';
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
</style>

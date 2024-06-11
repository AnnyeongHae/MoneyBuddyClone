<template>
    <div>
        <h1>Header</h1>
        <IEButton />
        <ul>
            <router-link :to="{ name: 'HomeExpense' }"></router-link>
        </ul>
    </div>
</template>

<script setup>
import IEButton from './IEButton.vue';
</script>

<style lang="scss" scoped></style>

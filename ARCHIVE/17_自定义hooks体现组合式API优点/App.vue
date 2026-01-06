<template>
    <PersonComp v-if="show" v-model="show"/>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import PersonComp from './components/Person.vue';
import { type Person, type Persons, type PersonArray } from "@/types";

let show = ref(true);



</script>

<style scoped>
/* 3. 样式美化 */
.app {
    background-color: #ddd;
    box-shadow: 58 58 50px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    padding: 20px;
}
</style>
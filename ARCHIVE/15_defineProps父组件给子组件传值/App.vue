<template>
    <PersonComp a="AAA" :list="persons" :array="persons"/>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import PersonComp from './components/Person.vue';
import { type Person, type Persons, type PersonArray } from "@/types";
let persons = reactive<Persons>([
    {
        id: "11",
        name: "张三",
        age: 20
    },
    {
        id: "22",
        name: "李四",
        age: 25
    },
    {
        id: "33",
        name: "王五",
        age: 30
    }
]);




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
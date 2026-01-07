<template>
    <div class="detail">
        <li>编号: {{  route.params.id }} </li>
        <li>标题: {{ route.params.title }} </li>
        <li>标题: {{ route.params.content }}</li>
        <img v-for="value in dogList" style="height: 100px;" :src="value"/>
    </div>
    
    <button @click="addDog">Add Dog</button>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { number } from 'echarts';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter;

console.log('route',route);
console.log("ROUTER",router);

let dogList = reactive([] as any);
let nums = reactive<number[]>([]);

async function addDog(){
   let res = await axios.get("https://dog.ceo/api/breeds/image/random");
   dogList.push(res.data.message);
   console.log("dogList",dogList);
   console.log("route.param.id", route.params.id);
   nums.push(Number(route.params.id));
   console.log("nums",nums);
}


</script>

<style scoped>
.detail {
    background-color: rgb(16, 172, 229);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 90px;
}
</style>
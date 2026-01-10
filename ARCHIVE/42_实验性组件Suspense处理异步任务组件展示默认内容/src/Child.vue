<template>
    <div id="child">
        <h2>Child vue : sum = {{ sum }}</h2>
        <img :src="message">
        <slot :im="childValue" name="sname"></slot>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

let sum = ref(0);

// ATTENTION 异步任务会导致组件不显示？ 需要在父组件使用Suspense？
let {data:{message}} = await axios.get("https://dog.ceo/api/breeds/image/random");
console.log(message)

let childValue = ref({name: "TOMM"})




</script>

<style scoped>

#child{
    background-color: skyblue;
    border-radius: 10px;
    /* 四个方向边距都是10px */
    padding: 10px; 
    box-shadow: 0 0 10px;

}

img {
    height: 200px;
}

</style>
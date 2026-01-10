<template>
    <div id="child">
        <h2>Child vue : sum = {{ sum }}</h2>
        <!-- ATTENTION 使用在main.ts中注册的全局组件hello -->
        <hello></hello>

        <!-- ATTENTION 使用main.ts中配置的全局变量 -->
         x-y = {{x - y }}
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

let sum = ref(0);


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
<template>
    <div class="app">
        <h2>APP vue</h2>
        <child></child>

        <!-- ATTENTION 使用在main.ts中注册的全局组件hello -->
        <hello></hello>

        <!-- ATTENTION 使用main.ts中配置的全局变量 -->
        x+y = {{x + y }}


        <!-- ATTENTION： 使用main.ts注册的全局指令 -->
         <h3 v-beauty="shuju">全局指令绑定的了</h3>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Child from './Child.vue';
import Hello from './Hello.vue';

let shuju = ref("“我是一个数据”");

</script>


<style scoped>
.app {
    background-color: #ddd;
    border-radius: 10px;
    /* 四个方向边距都是10px */
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>
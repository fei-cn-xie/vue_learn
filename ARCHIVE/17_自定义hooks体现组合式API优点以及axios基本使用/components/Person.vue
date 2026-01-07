<template>
    <div class="container">
        <h1>{{ sum }}</h1>
        <button @click="addSum">点我+1</button><br/>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index"/><br/>
        <button @click="addDog">点我家狗</button>
        <button @click="clearDog">清理狗</button>
    </div>


</template>


<script lang="ts" setup name="PersonSetup">

import useSum from '@/hooks/useSum';
import useDog from '@/hooks/useDog';

// ATTENTION 自定义勾子函数
let {sum,addSum} = useSum();
let {dogList,addDog,clearDog} = useDog()



</script>

<style scoped>
    /* scoped表示这里的样式只能在本vue组件中生效，即局部生效 */
.container {
    background-color: skyblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}

img {
    height: 100px;
}

</style>
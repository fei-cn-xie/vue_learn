<template>
    <div class="chat">
        <button @click="talkStore.getTalk">获取一句图为清华</button>
        <ul>
            <li v-for="value in talkStore.list" :key="value.id">{{ value.title }}</li>
        </ul>
        <h2>{{ countStore.sum }}</h2>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive, ref } from 'vue';
import { useCountStore } from '@/store/count';
import { usetalkStore } from '@/store/talk';

const talkStore = usetalkStore();
const countStore = useCountStore();

// ATTENTION 订阅talkStore中数据变化
talkStore.$subscribe(
    /**
     * 
     * @param mutate 本次修改的信息 // ATTENTION
     * @param state 真正的数据  // ATTENTION
     */
    (mutate, state)=>{
    console.log('talkStore保存的数据变化了额一下！！！！！！！！！！')
    console.log("mutate", mutate)
    console.log("state", state)
    localStorage.setItem('talkList', JSON.stringify(state.list)); // ATTENTION 浏览器的本地存储，存储数据
    console.log("LocalStorage", localStorage.getItem('talkList'))
})


</script>

<style scoped>
.chat {
    top: 20px;
    background-color: rgb(217, 20, 231);
    padding: 10px;
    width: 20%;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,button {
    margin: 0 5px;/* margin: 0 5px; // 上下0个像素， 左右5个像素 */
    height: 25px;
}
</style>
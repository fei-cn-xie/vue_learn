<template>
    <div class="chat">
        <button @click="getTalk">获取一句图为清华</button>
        <ul>
            <li v-for="value in list" :key="value.id">{{ value.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive, ref } from 'vue';

let list = reactive([
    {id: "01", title: "今天你有点怪，哪里怪，怪可爱的"},
    {id: "02", title: "你知道你和星星有什么区别吗？星星在天上，你在我心里。"},
    {id: "01", title: "这是西瓜，那是哈密瓜，而你是我的小傻瓜"}])


async function getTalk(){
    // await axios.get('api/words/api.php').then(resp =>{
    //     list.unshift({
    //         id: nanoid(),
    //         title: resp.data
    //     });
    // });
    let {data: title} = await axios.get('api/words/api.php'); // 连续解构 + 重命名
    let obj = {
        id: nanoid(),
        title
    }
    list.unshift(obj);
}

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
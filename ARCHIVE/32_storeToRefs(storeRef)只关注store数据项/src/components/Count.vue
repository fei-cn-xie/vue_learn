<template>
    <div class="count">
        <h2>当前求和为{{sum}}</h2>
        <h2>school : {{ school }}</h2>
        <br/>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
        <br/>
        <h4>tuwei: {{ talkStore.list[talkStore.list.length - 1] }}</h4>
    </div>
</template>

<script lang="ts" setup name="Count">
import { ref } from 'vue';

//  引入定义的小仓库 
import { useCountStore } from '@/store/count';
import { usetalkStore } from '@/store/talk';
import { storeToRefs } from 'pinia';

const countStore = useCountStore();

const talkStore = usetalkStore();

// ATTENTION storeToRefs只会关注store中的数据，不会对方法进行包裹（区别于toRefs())
const {sum, school} = storeToRefs(useCountStore())

let n = ref(1);

function add(){

    // 第三种 (需要在store的ts文件中配置actions)
    countStore.increment(n.value);

}

function sub(){
    sum.value -= n.value;
}

</script>

<style scoped>
.count {
    background-color: skyblue;
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
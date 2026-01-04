<template>
    <div class="container">
        <ul>
            <li v-for="game in games" :key="game.id">
                {{game.id}} : {{ game.name }}
            </li>
        </ul>
        <button @click="addGame">添加游戏</button>
    </div>
</template>


<script lang="ts" setup name="PersonSetup">
    import {  reactive, ref } from 'vue';
    
    // reactive 和 ref 都可以定义响应式数据
    // reactive 只能定义对象类型的响应式数据
    // ref 可以定义基本类型和对象类型的响应式数据
    // ref 定义对象类型的响应式数据时，底层是使用 reactive 实现的

    /**
     * ref和 reactive 的使用原则
     * 1. 定义基本类型数据时，使用 ref
     * 2. 定义对象类型数据时，层级不深，使用reactive和ref都可以
     * 3. 定义对象类型数据时，层级较深，推荐使用 reactive （因为 reactive 底层是使用 Proxy 实现的，性能更好）
     */

    const games = ref<{id: string; name: string}[]>([
        {id: "001", name: "王者荣耀"},
        {id: "002", name: "和平精英"},
        {id: "003", name: "原神"}
    ]);
    const gg = reactive(games.value);

    let i = 4;
    function addGame() {
        console.log(gg);
        games.value.push({id: "" + i++, name: "新游戏"});
    }  



</script>

<style scoped>
.container {
    background-color: skyblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}
</style>
<template>
    <div class="container">
        <h1> Car: {{ car.brand }}</h1>
        <h1> Price: {{ car.price }}</h1>
        <button @click="changePrice">涨价</button>
        <ul>
            <li v-for="game in games" :key="game.id">
                {{ game.name }}
            </li>
        </ul>
        <button @click="addGame">添加游戏</button>

        <h1> 测试 a.b.c</h1>
        <h2> c: {{ obj.a.b.c }} </h2>
        <button @click="changeC">改c</button>
    </div>
</template>


<script lang="ts" setup name="PersonSetup">
    import {  reactive, ref } from 'vue';

    /**
     * 使用 reactive 定义一个响应式的对象 Proxy: 
     * Proxy 对象是通过 ES6 的 Proxy 实现的，可以监听对象属性的读取和修改操作，从而实现响应式数据绑定。
     */
    let car = reactive({
        brand: "奔驰",
        price: 100
    })

    let games = reactive([
        {id: "001", name: "王者荣耀"},
        {id: "002", name: "和平精英"},
        {id: "003", name: "原神"}
    ])

    function changePrice() {
        car.price += 10;
    }

    function addGame() {
        games.push({id: "004", name: "新游戏"})
    }

    let obj = ref({
        a : {
            b : {
                c : 100
            }
        }
    })

    function changeC() {
        obj.value.a.b.c += 1;
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
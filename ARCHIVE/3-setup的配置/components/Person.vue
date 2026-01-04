<template>
    <div class="container">
        <h2>个人信息</h2>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <button @click="showTel">电话: {{ tel }}</button>
        <button @click="changeName">改名</button>
        <button @click="changeAge">加岁数</button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    name: 'Person',
    beforeCreate() {
        console.log("Person组件 beforeCreate"); // 组件实例化之前调用
    },
    /**
     * 组合式API
     */
    setup() {
        // setup里面不能用this, 是undefined
        console.log("Person组件 setup"); // 组件实例化之前调用, Vue3中已经弱化this的作用
        // 数据
        let name = ref("JERRY"); // 注意，直接赋值let name = "JERRY", 此时的name不是响应式的
        let age = ref(22); // 注意，直接赋值let age = 22; 此时的age不是响应式的
        let tel = 19876543210; // 注意，此时的tel不是响应式的

        // 方法
        function showTel() {
            alert(tel);
        }
        function changeName() {
            name.value = "TOM";
        }
        function changeAge() {
            age.value += 1;
        }
        return {name, age, tel, showTel, changeName, changeAge}; // 
    }
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
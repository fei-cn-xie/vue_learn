<template>
    <div class="container">
        <h2>个人信息</h2>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <button @click="showTel">电话: {{ tel }}</button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    name: 'Person',
    /**
     * 1. 配置数据
     */
    data() {
        return {
            name: "TOM",
            age: 18,
            tel: 12345678901
        };
    },
    /**
     * 2. 配置方法
     */
    methods: {
        showTel() {
            alert(this.tel);
        }
    },
    /**
     * 3. setup函数
     */
    setup() {

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
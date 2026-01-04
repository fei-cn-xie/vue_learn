<template>
    <!-- 1. 结构 -->
     <div class="container">
        <h1> Hello World!!!</h1>
     </div>
</template>

<script lang="ts">
// 2. 逻辑交互
export default {
    name: 'App', // 组件命名
};
</script>

<style scoped>
/* 3. 样式美化 */
.container {
    background-color: #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}

</style>
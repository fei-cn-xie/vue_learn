<template>
    <!-- 1. 结构 -->
     <div class="app">
        <h1> Hello World!!!</h1>
        <Person />
     </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue';

// 2. 逻辑交互
export default {
    name: 'App', // 组件命名
    components: {
        Person
    }
};
</script>

<style scoped>
/* 3. 样式美化 */
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}

</style>
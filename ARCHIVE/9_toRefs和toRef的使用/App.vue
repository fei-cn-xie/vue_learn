<template>
    <Person />
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
    box-shadow: 58 58 50px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    padding: 20px;
}

</style>
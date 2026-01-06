<template>
    <div class="detail">
        <li>编号: {{route.query.id}}</li>
        <li>标题: {{route.query.title}}</li>
        <li>标题: {{route.query.content}}</li>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// ATTENTION 接收路由传参query
import { useRoute } from 'vue-router';
const route = useRoute();



</script>

<style scoped>
.detail {
    background-color: rgb(16, 172, 229);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 90px;
}
</style>
<template>

    <h1> Wellcome To HomeView</h1>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(()=>{
    setTimeout(()=>{
        console.log("三秒一到就跳转");
        router.replace("/news")
    },3000);
})

</script>

<style scoped>

</style>
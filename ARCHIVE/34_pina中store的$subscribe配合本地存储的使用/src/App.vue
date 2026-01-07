<template>
<h1>APP let</h1>
<count></count> <br/>
<love-chat/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Count from './components/Count.vue';
import LoveChat from './components/LoveChat.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<style scoped>

</style>
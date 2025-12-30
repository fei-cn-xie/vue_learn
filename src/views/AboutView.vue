<template>
  <main class="full-page">
    <about-view-demo/>
  </main>
</template>

<script setup lang="ts">
import AboutViewDemo from '../components/about/AboutDemo.vue'
</script>

<style scoped>
.full-page {
  width: 100%;
  min-height: 100vh;
  padding: 24px;
  box-sizing: border-box;
  display: block;
}
</style>



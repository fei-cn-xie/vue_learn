<template>
  <div class="main-layout">
    <h1 style="text-align: center; padding-top: 20px;">项目数字化运营大屏</h1>
    <ProjectDashboard :raw-data="mockProjectData" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ProjectDashboard from './components/about/ProjectDashboard.vue'

// 定义模拟数据
const mockProjectData = ref(
  Array.from({ length: 50 }).map((_, i) => ({
    rank: i + 1,
    name: `项目_${i + 1}`,
    department: ['研发部', '市场部', '运营部', '财务部'][Math.floor(Math.random() * 4)],
    isBlankSheet: Math.random() > 0.8 ? (Math.random() > 0.5 ? -1 : 0) : 1,
    q1: Math.floor(Math.random() * 50),
    q2: Math.floor(Math.random() * 50),
    q3: Math.floor(Math.random() * 50),
    q4: Math.floor(Math.random() * 50),
  }))
);
</script>
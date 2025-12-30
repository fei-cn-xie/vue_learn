<template>
  <ProjectDashboard :raw-data="mockProjectData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ProjectDashboard from './ProjectDashboard.vue';

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
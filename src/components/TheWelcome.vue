<template>
  <div>
    <div class="dashboard" >
    <h1>项目阶段统计</h1>
    
    <ChartItem :chart-data="projectData" />

    <button @click="updateData" style="margin-top: 20px;">更新数据</button>

    </div>
  
    <div class="grid-layout">
        <RankingChart :data="rankData" />
        <PieChart :data="pieData" />
        <RadarChart :indicators="radarIndicators" :values="radarValues" />
    </div>

  
    <div style="padding: 40px; background: #1a202c; min-height: 100vh;">
      <h2 style="color: white; margin-bottom: 20px;">全球人口结构实时洞察</h2>
      <PopulationGlobe :source-data="mockData" />
    </div>

  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import RankingChart from './RankingChart.vue';
import PieChart from './PieChart.vue';
import RadarChart from './RadarChart.vue';
import ChartItem, { type StageDataItem } from './ChartItem.vue'; // 假设路径
import PopulationGlobe from './PopulationGlobe.vue';

const mockData = [
  {
    name: '中国',
    lng: 116.4,
    lat: 39.9,
    data: [10, 15, 20, 30, 40, 25, 15] // 堆叠高度
  },
  {
    name: '美国',
    lng: -77.0,
    lat: 38.9,
    data: [8, 12, 18, 25, 35, 30, 20]
  },
  {
    name: '巴西',
    lng: -47.9,
    lat: -15.8,
    data: [15, 20, 25, 30, 20, 10, 5]
  },
  {
    name: '尼日利亚',
    lng: 7.5,
    lat: 9.1,
    data: [25, 30, 35, 20, 10, 5, 2]
  }
];

// 1. 排行榜数据
const rankData = ref([
  { name: '研发部', value: 85 },
  { name: '市场部', value: 92 },
  { name: '人事部', value: 60 }
]);

// 2. 饼图数据
const pieData = ref([
  { name: '进行中', value: 40 },
  { name: '已完成', value: 50 },
  { name: '已挂起', value: 10 }
]);

// 3. 雷达图数据
const radarIndicators = [
  { name: '交付速度', max: 100 },
  { name: '代码质量', max: 100 },
  { name: '客户满意度', max: 100 },
  { name: '成本控制', max: 100 }
];
const radarValues = ref([88, 72, 95, 60]);


// 模拟的初始数据
const projectData = ref<StageDataItem[]>([
  { runing: 3, delay: 2, completed: 12 },  // 第一阶段
  { runing: 13, delay: 2, completed: 12 }, // 第二阶段
  { runing: 3, delay: 12, completed: 2 },  // 第三阶段
  { runing: 5, delay: 0, completed: 20 }   // 第四阶段
]);

// 模拟数据更新函数
const updateData = () => {
  projectData.value = [
    { runing: 10, delay: 5, completed: 5 },
    { runing: 2, delay: 8, completed: 10 },
    { runing: 5, delay: 1, completed: 15 }
  ];
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
  width: 800px; /* 限制一下父容器宽度 */
  margin: 0 auto;
}
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

</style>
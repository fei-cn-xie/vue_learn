<template>
  <div class="globe-container">
    <div ref="chartRef" class="chart"></div>
    <div class="custom-legend">
      <div v-for="item in ageGroups" :key="item.label" class="legend-item">
        <span class="dot" :style="{ backgroundColor: item.color }"></span>
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';
import 'echarts-gl'; // 必须引入 3D 扩展

// --- 类型定义 ---
interface PopulationData {
  name: string;
  lng: number;
  lat: number;
  data: number[]; // 依次为：幼儿, 儿童, 青少年, 青年, 中年, 中老年, 老年
}

const props = defineProps<{
  sourceData: PopulationData[];
}>();

// 年龄段配置
const ageGroups = [
  { label: '幼儿', color: '#feb2b2' },
  { label: '儿童', color: '#fbb6ce' },
  { label: '青少年', color: '#d6bcfa' },
  { label: '青年', color: '#90cdf4' },
  { label: '中年', color: '#4fd1c5' },
  { label: '中老年', color: '#f6e05e' },
  { label: '老年', color: '#f6ad55' }
];

const chartRef = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const initChart = () => {
  if (!chartRef.value) return;
  myChart = echarts.init(chartRef.value);

  // 将数据转换为 ECharts 3D 柱状图需要的格式
  // 堆叠 3D 柱状图在 ECharts GL 中通常通过多层 bar3D 实现
  const series = ageGroups.map((group, index) => {
    return {
      type: 'bar3D',
      coordinateSystem: 'globe',
      name: group.label,
      stack: 'population', // 堆叠标识
      shading: 'lambert',
      bevelSize: 0.3,
      itemStyle: { color: group.color, opacity: 0.9 },
      // 数据格式：[经度, 纬度, 该层高度]
      data: props.sourceData.map(item => [item.lng, item.lat, item.data[index]])
    };
  });

  const option: any = {
    backgroundColor: '#000', // 星空背景
    globe: {
      // 使用自带的底图或基础纹理
      baseTexture: 'https://registry.npmmirror.com/echarts-examples/6.0.0/files/public/data-gl/asset/world.topo.bathy.200401.jpg',
      heightTexture: 'https://registry.npmmirror.com/echarts-examples/6.0.0/files/public/data-gl/asset/world.topo.bathy.200401.jpg',
      displacementScale: 0.04,
      shading: 'lambert',
      environment: 'https://registry.npmmirror.com/echarts-examples/6.0.0/files/public/data-gl/asset/starfield.jpg', // 背景星空图
      light: {
        main: { intensity: 1.2, shadow: true },
        ambient: { intensity: 0.3 }
      },
      viewControl: {
        autoRotate: true, // 开启自动旋转，更美观
        autoRotateAfterStill: 10,
        distance: 200
      }
    },
    series: series
  };

  myChart.setOption(option);
};

onMounted(() => {
  initChart();
  window.addEventListener('resize', () => myChart?.resize());
});

onUnmounted(() => {
  myChart?.dispose();
});

watch(() => props.sourceData, initChart, { deep: true });
</script>

<style scoped>
.globe-container {
  position: relative;
  width: 100%;
  height: 600px;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
}

.chart {
  width: 100%;
  height: 100%;
}

.custom-legend {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  font-size: 12px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  margin-right: 8px;
}
</style>
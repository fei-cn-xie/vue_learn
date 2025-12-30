<template>
  <div ref="chartRef" class="chart-box"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

// 定义数据类型：名称和分值
export interface RankItem {
  name: string;
  value: number;
}

const props = defineProps<{
  data: RankItem[];
}>();

const chartRef = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const initChart = () => {
  if (!chartRef.value) return;
  myChart = echarts.init(chartRef.value);

  // 对数据进行排序，确保排行榜效果
  const sortedData = [...props.data].sort((a, b) => a.value - b.value);

  const option: echarts.EChartsOption = {
    title: { text: '任务完成排行榜' },
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '10%', bottom: '3%', containLabel: true },
    xAxis: { type: 'value' },
    yAxis: {
      type: 'category',
      data: sortedData.map(item => item.name),
      inverse: false // 是否反转坐标轴
    },
    series: [{
      name: '完成数',
      type: 'bar',
      data: sortedData.map(item => item.value),
      itemStyle: {
        // 设置渐变色提升视觉效果
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: '#83bff6' },
          { offset: 1, color: '#188df0' }
        ])
      },
      label: { show: true, position: 'right' } // 在条形右侧显示数值
    }]
  };
  myChart.setOption(option);
};

onMounted(initChart);
watch(() => props.data, initChart, { deep: true });
</script>

<style scoped> .chart-box { width: 100%; height: 300px; } </style>
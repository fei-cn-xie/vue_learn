<template>
  <div ref="chartRef" class="chart-box"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

export interface PieDataItem {
  name: string;
  value: number;
}

const props = defineProps<{
  data: PieDataItem[];
}>();

const chartRef = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const initChart = () => {
  if (!chartRef.value) return;
  myChart = echarts.init(chartRef.value);

  const option: echarts.EChartsOption = {
    title: { text: '状态分布占比', left: 'center' },
    tooltip: { trigger: 'item' },
    legend: { bottom: '5%', left: 'center' },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'], // 环形效果：内圆40%，外圆70%
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
      label: { show: false, position: 'center' },
      emphasis: {
        label: { show: true, fontSize: 20, fontWeight: 'bold' }
      },
      data: props.data
    }]
  };
  myChart.setOption(option);
};

onMounted(initChart);
watch(() => props.data, initChart, { deep: true });
</script>

<style scoped> .chart-box { width: 100%; height: 300px; } </style>
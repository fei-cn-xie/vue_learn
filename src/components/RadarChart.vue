<template>
  <div ref="chartRef" class="chart-box"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

// 雷达图通常需要最大值来设定刻度范围
export interface RadarIndicator {
  name: string;
  max: number;
}

const props = defineProps<{
  indicators: RadarIndicator[]; // 维度定义：如 [{name: '速度', max: 100}, ...]
  values: number[];             // 数据：如 [80, 90, 70, ...]
}>();

const chartRef = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const initChart = () => {
  if (!chartRef.value) return;
  myChart = echarts.init(chartRef.value);

  const option: echarts.EChartsOption = {
    title: { text: '多维度能力评估' },
    radar: {
      indicator: props.indicators,
      shape: 'circle', // 可以改为 'polygon'
      splitNumber: 5,
      axisName: { color: '#999' }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: props.values,
          name: '当前表现',
          areaStyle: { color: 'rgba(84, 112, 198, 0.4)' } // 填充区域颜色
        }
      ]
    }]
  };
  myChart.setOption(option);
};

onMounted(initChart);
watch(() => [props.indicators, props.values], initChart, { deep: true });
</script>

<style scoped> .chart-box { width: 100%; height: 400px; } </style>
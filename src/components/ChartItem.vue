<template>
  <div ref="chartRef" class="chart-container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import * as echarts from 'echarts';

// --- 1. 定义 TypeScript 接口 ---

// 定义单个阶段的数据结构（根据你提供的示例）
// 注意：这里保留了你示例中的 key 名（如 'runing'），实际项目中建议修正拼写为 'running'
export interface StageDataItem {
  runing: number;
  delay: number;
  completed: number;
}

// --- 2. 接收父组件传入的 Props ---
const props = defineProps<{
  chartData: StageDataItem[]; // 接收一个对象数组
}>();

// --- 3. 变量定义 ---
const chartRef = ref<HTMLElement | null>(null); // 获取 DOM 元素
let myChart: echarts.ECharts | null = null;     // 保存 ECharts 实例

// --- 4. 核心图表逻辑 ---
const initChart = () => {
  // 防御性检查：确保 DOM 存在
  if (!chartRef.value) return;

  // 初始化实例（如果已存在则销毁，防止内存泄漏或重复渲染）
  if (myChart) {
    myChart.dispose();
  }
  
  // 初始化 ECharts
  myChart = echarts.init(chartRef.value);

  // *关键步骤*：处理数据
  // 我们需要把父组件传入的 [对象, 对象] 转换为 ECharts 需要的 [数组, 数组]
  // 同时生成 X 轴的标签（第一阶段, 第二阶段...）
  const xAxisData = props.chartData.map((_, index) => `第${index + 1}阶段`);
  const runningData = props.chartData.map(item => item.runing);
  const delayData = props.chartData.map(item => item.delay);
  const completedData = props.chartData.map(item => item.completed);

  // 配置项
  const option: echarts.EChartsOption = {
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' } // 鼠标悬停时显示阴影指示器
    },
    // 图例组件
    legend: {
      data: ['进行中', '推迟', '已完成'],
      bottom: 0 // 图例放在底部
    },
    // 网格配置（控制图表在容器内的位置）
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%', // 留出空间给图例
      containLabel: true
    },
    // X 轴配置
    xAxis: {
      type: 'category',
      data: xAxisData, // 使用生成的 ["第一阶段", "第二阶段"...]
    },
    // Y 轴配置
    yAxis: {
      type: 'value',
      name: '数量'
    },
    // 系列列表（核心部分）
    series: [
      {
        name: '进行中',
        type: 'bar',
        stack: 'total', // *关键*：相同的 stack 值会堆叠在一起
        emphasis: { focus: 'series' }, // 高亮样式
        data: runningData,
        itemStyle: { color: '#5470C6' } // 蓝色系
      },
      {
        name: '推迟',
        type: 'bar',
        stack: 'total', // *关键*：相同的 stack 值
        emphasis: { focus: 'series' },
        data: delayData,
        itemStyle: { color: '#EE6666' } // 红色/橙色系，表示警告
      },
      {
        name: '已完成',
        type: 'bar',
        stack: 'total', // *关键*：相同的 stack 值
        emphasis: { focus: 'series' },
        data: completedData,
        itemStyle: { color: '#91CC75' } // 绿色系，表示成功
      }
    ]
  };

  // 设置配置项
  myChart.setOption(option);
};

// --- 5. 生命周期与监听 ---

// 挂载时初始化
onMounted(() => {
  initChart();
  // 监听窗口大小变化，实现自适应
  window.addEventListener('resize', handleResize);
});

// 卸载时清理
onUnmounted(() => {
  if (myChart) {
    myChart.dispose();
  }
  window.removeEventListener('resize', handleResize);
});

// 监听数据变化：如果父组件传入的数据变了，重绘图表
watch(
  () => props.chartData,
  () => {
    // 使用 nextTick 确保数据变化后 DOM 也是就绪的（虽然 echarts 不依赖 vue dom更新，但这是好习惯）
    nextTick(() => {
      initChart();
    });
  },
  { deep: true } // 深度监听，因为是对象数组
);

// 窗口调整大小时调用的函数
const handleResize = () => {
  myChart?.resize();
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px; /* 你可以根据需要调整高度，或者由父组件样式决定 */
}
</style>
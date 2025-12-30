<template>
  <div class="dashboard-wrapper" ref="wrapperRef">
    <div class="header-bar">
      <div class="title-section">
        <div class="indicator"></div>
        <h2>项目数字化运营看板</h2>
      </div>
      
      <div class="filter-group">
        <div class="filter-item">
          <label>所属部门</label>
          <div class="select-wrapper">
            <select v-model="filters.department">
              <option :value="null">全部部门</option>
              <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
            </select>
          </div>
        </div>

        <div class="filter-item">
          <label>黑名单状态</label>
          <div class="select-wrapper">
            <select v-model="filters.isBlankSheet">
              <option :value="1">全部状态</option>
              <option :value="0">正常项目</option>
              <option :value="-1">异常名单</option>
            </select>
          </div>
        </div>

        <button @click="toggleOrder" class="action-btn" :class="{ 'active': filters.order === 'asc' }">
          <span class="icon">{{ filters.order === 'desc' ? '🏆' : '📉' }}</span>
          {{ filters.order === 'desc' ? '查看前十' : '查看倒数' }}
        </button>
      </div>
    </div>

    <div class="content-resizable" @mousemove="onMouseMove" @mouseup="onMouseUp">
      
      <div class="card rank-card" :style="{ width: leftWidth + 'px' }">
        <div class="card-header">
          <div class="header-left">
            <h3>项目贡献度排行</h3>
            <span class="subtitle">TOP 10 Ranking</span>
          </div>
        </div>
        <div class="chart-body">
          <div ref="rankChartRef" class="echart-instance"></div>
        </div>
      </div>

      <div class="resizer" @mousedown="onMouseDown">
        <div class="resizer-line"></div>
      </div>

      <div class="card trend-card" style="flex: 1">
        <div class="card-header">
          <div class="header-left">
            <h3>季度产出趋势</h3>
            <span class="subtitle">Quarterly Trends</span>
          </div>
        </div>
        <div class="chart-body">
          <div ref="lineChartRef" class="echart-instance"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch, onUnmounted, nextTick, reactive } from 'vue';
import * as echarts from 'echarts';

// --- 类型定义 ---
export interface ProjectItem {
  rank: number;
  name: string;
  department: string;
  isBlankSheet: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
}

const props = defineProps<{
  rawData: ProjectItem[];
}>();

// --- 状态与拖拽逻辑 ---
const wrapperRef = ref<HTMLElement | null>(null);
const leftWidth = ref(600); 
const isResizing = ref(false);

const rankChartRef = ref<HTMLElement | null>(null);
const lineChartRef = ref<HTMLElement | null>(null);
let rankChart: echarts.ECharts | null = null;
let lineChart: echarts.ECharts | null = null;

const filters = reactive({
  department: null as string | null,
  isBlankSheet: 1,
  order: 'desc' as 'asc' | 'desc'
});

const onMouseDown = () => {
  isResizing.value = true;
  document.body.style.cursor = 'col-resize';
};

const onMouseMove = (e: MouseEvent) => {
  if (!isResizing.value || !wrapperRef.value) return;
  const containerRect = wrapperRef.value.getBoundingClientRect();
  const offset = e.clientX - containerRect.left - 20;
  if (offset > 300 && offset < containerRect.width - 300) {
    leftWidth.value = offset;
    rankChart?.resize();
    lineChart?.resize();
  }
};

const onMouseUp = () => {
  isResizing.value = false;
  document.body.style.cursor = 'default';
};

// --- 数据计算 ---
const departments = computed(() => [...new Set(props.rawData.map(i => i.department))]);

const filteredData = computed(() => {
  return props.rawData.filter(item => {
    const deptMatch = !filters.department || item.department === filters.department;
    const blankMatch = filters.isBlankSheet === 1 ? true : item.isBlankSheet === filters.isBlankSheet;
    return deptMatch && blankMatch;
  });
});

const rankingData = computed(() => {
  const dataWithTotal = filteredData.value.map(item => ({
    ...item,
    total: Number(item.q1 || 0) + Number(item.q2 || 0) + Number(item.q3 || 0) + Number(item.q4 || 0)
  }));
  return dataWithTotal.sort((a, b) => filters.order === 'desc' ? b.total - a.total : a.total - b.total);
});

const toggleOrder = () => { filters.order = filters.order === 'desc' ? 'asc' : 'desc'; };

// --- 图表渲染 ---
const updateCharts = () => {
  if (!rankChart || !lineChart) return;

  const top10 = rankingData.value.slice(0, 10);

  // 1. 排行榜配置
  rankChart.setOption({
    grid: { top: '5%', left: '10', right: '15%', bottom: '5%', containLabel: true },
    tooltip: { 
      trigger: 'axis', 
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      formatter: (params: any) => {
        const item = top10[params[0].dataIndex];
        return `
          <div style="padding: 10px; line-height: 1.8;">
            <b style="font-size: 14px; color: #1e293b">${item.name}</b><br/>
            <span style="color: #64748b">部门: ${item.department}</span><br/>
            <hr style="border:none; border-top: 1px solid #f1f5f9; margin: 5px 0;"/>
            <span style="color: #2563eb; font-weight: bold">年度总量: ${item.total}</span><br/>
            <span style="font-size: 12px; color: #94a3b8">Q1: ${item.q1} | Q2: ${item.q2} | Q3: ${item.q3} | Q4: ${item.q4}</span>
          </div>
        `;
      }
    },
    xAxis: { type: 'value', hide: true, splitLine: { show: false } },
    yAxis: {
      type: 'category',
      data: top10.map(i => i.name),
      inverse: true,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 12,
        formatter: (value: string, index: number) => {
          const rank = filters.order === 'desc' ? index + 1 : rankingData.value.length - index;
          const richKey = (filters.order === 'desc' && index < 3) ? `rank${index + 1}` : 'rank';
          return `{${richKey}|${rank}} {name|${value}}`;
        },
        rich: {
          rank1: { backgroundColor: '#FFD700', color: '#fff', borderRadius: 2, width: 22, height: 22, align: 'center', fontWeight: 'bold' },
          rank2: { backgroundColor: '#C0C0C0', color: '#fff', borderRadius: 2, width: 22, height: 22, align: 'center', fontWeight: 'bold' },
          rank3: { backgroundColor: '#CD7F32', color: '#fff', borderRadius: 2, width: 22, height: 22, align: 'center', fontWeight: 'bold' },
          rank:  { backgroundColor: '#f1f5f9', color: '#64748b', borderRadius: 2, width: 22, height: 22, align: 'center' },
          name:  { color: '#334155', padding: [0, 0, 0, 8] }
        }
      }
    },
    series: [{
      type: 'bar',
      data: top10.map(i => i.total),
      barWidth: 16,
      showBackground: true,
      backgroundStyle: { 
        color: '#f8fafc', 
        borderRadius: 0 // 背景条设为直角
      },
      itemStyle: {
        borderRadius: 0, // 数据条设为直角
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#3b82f6' }, 
          { offset: 1, color: '#1d4ed8' }
        ])
      },
      label: { show: true, position: 'right', color: '#64748b', fontWeight: 'bold' }
    }]
  });

  // 2. 趋势图配置
  const seriesList = [];
  if (!filters.department) {
    const totalQ = [0, 0, 0, 0];
    filteredData.value.forEach(d => {
      totalQ[0] += Number(d.q1 || 0); totalQ[1] += Number(d.q2 || 0);
      totalQ[2] += Number(d.q3 || 0); totalQ[3] += Number(d.q4 || 0);
    });
    seriesList.push({
      name: '全部汇总', type: 'line', smooth: true, symbolSize: 6, lineStyle: { width: 3, color: '#3b82f6' },
      areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(59, 130, 246, 0.1)' }, { offset: 1, color: 'rgba(59, 130, 246, 0)' }]) },
      data: totalQ
    });
  }
  
  const targetDepts = filters.department ? [filters.department] : departments.value.slice(0, 5);
  targetDepts.forEach(dept => {
    const deptItems = props.rawData.filter(r => r.department === dept);
    seriesList.push({
      name: dept, type: 'line', smooth: true, showSymbol: false, lineStyle: { width: 1.5 }, emphasis: { focus: 'series' },
      data: [
        deptItems.reduce((s, c) => s + Number(c.q1 || 0), 0),
        deptItems.reduce((s, c) => s + Number(c.q2 || 0), 0),
        deptItems.reduce((s, c) => s + Number(c.q3 || 0), 0),
        deptItems.reduce((s, c) => s + Number(c.q4 || 0), 0),
      ]
    });
  });

  lineChart.setOption({
    color: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
    tooltip: { trigger: 'axis' },
    legend: { top: 0, right: 20, icon: 'rect' }, // 趋势图图例也改为矩形
    grid: { left: '3%', right: '4%', bottom: '5%', top: '15%', containLabel: true },
    xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'], boundaryGap: false },
    yAxis: { type: 'value', splitLine: { lineStyle: { type: 'dashed' } } },
    series: seriesList
  }, true);
};

onMounted(() => {
  nextTick(() => {
    if (wrapperRef.value) {
      leftWidth.value = (wrapperRef.value.clientWidth - 40 - 10) / 2; 
    }
    if (rankChartRef.value) rankChart = echarts.init(rankChartRef.value);
    if (lineChartRef.value) lineChart = echarts.init(lineChartRef.value);
    updateCharts();
    window.addEventListener('resize', handleResize);
  });
});

const handleResize = () => {
  if (wrapperRef.value) {
    leftWidth.value = (wrapperRef.value.clientWidth - 50) / 2;
  }
  rankChart?.resize();
  lineChart?.resize();
};

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  rankChart?.dispose();
  lineChart?.dispose();
});

watch([filters, () => props.rawData], updateCharts, { deep: true });
</script>

<style scoped>
.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f8fafc;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  user-select: none;
}

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 12px 24px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 16px;
  flex-shrink: 0;
}

.title-section { display: flex; align-items: center; gap: 10px; }
.indicator { width: 4px; height: 18px; background: #2563eb; }
h2 { margin: 0; font-size: 17px; color: #0f172a; letter-spacing: 0.5px; }

.filter-group { display: flex; gap: 16px; align-items: flex-end; }
.filter-item { display: flex; flex-direction: column; gap: 4px; }
.filter-item label { font-size: 11px; color: #94a3b8; font-weight: bold; text-transform: uppercase; }

.select-wrapper select {
  appearance: none;
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 5px 28px 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  min-width: 110px;
  cursor: pointer;
}

.action-btn {
  height: 30px;
  padding: 0 12px;
  border: 1px solid #e2e8f0;
  background: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
}
.action-btn.active { background: #2563eb; color: #fff; border-color: #2563eb; }

.content-resizable {
  display: flex;
  flex: 1;
  min-height: 0;
}

.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.resizer {
  width: 10px;
  cursor: col-resize;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.resizer:hover { background: #f1f5f9; }
.resizer-line { width: 1px; height: 30px; background: #cbd5e1; }

.card-header {
  padding: 12px 20px;
  background: #fcfcfd;
  border-bottom: 1px solid #e2e8f0;
}

h3 { margin: 0; font-size: 13px; color: #475569; font-weight: 700; }
.subtitle { font-size: 10px; color: #94a3b8; letter-spacing: 1px; }

.chart-body { flex: 1; padding: 10px; min-height: 0; }
.echart-instance { width: 100%; height: 100%; }
</style>
<script setup lang="ts">
import { NCard, NThing } from 'naive-ui'
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
type EChartsOption = echarts.EChartsOption;
const chartRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
      const myChart = echarts.init(chartRef.value);
    let option: EChartsOption;
    // eslint-disable-next-line prefer-const
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: '1%',
        left: 'center',
        itemStyle: {
          borderWidth: 0
        }
      },
      series: [
        {
          color: ['#5da8ff', '#8e9dff', '#fedc69', '#26deca'],
          name: 'Access From',
          type: 'pie',
          radius: ['45%', '75%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12',
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { name: "学习", value: 20 },
            { name: "娱乐", value: 10 },
            { name: "工作", value: 40 },
            { name: "休息", value: 30 }
          ],
        }
      ]
    };

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      option && myChart.setOption(option);
    } catch (e) {
      console.log(e);
    }
  } else {
    console.error('Invalid DOM element');
  }
});
defineOptions({
  name:'PieChart'
})


</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
      <div ref="chartRef" class="div h-360px overflow-hidden"></div>
  </NCard>
</template>

<style scoped>

</style>

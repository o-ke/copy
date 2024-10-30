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
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ["下载量","注册量"]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'] as string[]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          color: '#8e9dff',
          name: "下载量",
          type: 'line',
          smooth: true,
          stack: 'Total',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0.25,
                  color: '#8e9dff'
                },
                {
                  offset: 1,
                  color: '#fff'
                }
              ]
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311] as number[]
        },
        {
          color: '#26deca',
          name: "注册量",
          type: 'line',
          smooth: true,
          stack: 'Total',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0.25,
                  color: '#26deca'
                },
                {
                  offset: 1,
                  color: '#fff'
                }
              ]
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [2208, 2016, 2916, 4512, 8281, 2008, 1963, 2367, 2956, 678]
        }
      ]
    }

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
  name:'LineChart'
})


</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
    <div ref="chartRef" class="div h-360px overflow-hidden"></div>
  </NCard>
</template>

<style scoped>

</style>

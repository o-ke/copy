// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts';

// 图图表类型
import  type {
  BarSeriesOption,
  GaugeSeriesOption,
  LineSeriesOption,
  PictorialBarSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  ScatterSeriesOption
} from  'echarts/charts'
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent
} from 'echarts/components';

//引入组件类型
import type {
  TitleComponentOption,
  ToolboxComponentOption,
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components'

// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import { ref } from 'vue'

export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | GaugeSeriesOption
  | PictorialBarSeriesOption
  | PieSeriesOption
  | RadarSeriesOption
  | ScatterSeriesOption
  | ToolboxComponentOption
  | LineSeriesOption
  | TitleComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  GaugeChart,
  LineChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
  ScatterChart,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LegendComponent,
  ToolboxComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

interface ChartHooks {
  onRender?:  (chart:echarts.ECharts) => void | Promise<void>;
  onUpdated?: (chart:echarts.ECharts) => void | Promise<void>;
  onDestroy?:   (chart:echarts.ECharts) => void | Promise<void>;
}

export function useEcharts<T extends ECOption>(optionsFactory: () => T, hooks: ChartHooks = {}) {
  const domRef = ref<HTMLElement | null>(null)
  const chart : echarts.ECharts | null = null;
  const chartOptions = optionsFactory();

  function isRendered(){
    return Boolean(domRef.value && chart)
  }

  const {
    onUpdated = instance =>{
      instance.hideLoading();
    },
  } = hooks

  async function updateOptions(callback: (opts: T,optsFactory: () => T) => ECOption = () => chartOptions){
      if(!isRendered()) return;

      const updatedOpts = callback(chartOptions, optionsFactory);

      //浅拷贝
      Object.assign(chartOptions,updatedOpts);

      if(isRendered()){
        chart?.clear()
      }

      chart?.setOption({...updatedOpts,backgroundColor: 'transparent' })

      await onUpdated?.(chart!);

  }

  function setOptions(Options:T){
    chart?.setOption(Options)
  }

  return {
    domRef,
    updateOptions,
    setOptions
  }


}

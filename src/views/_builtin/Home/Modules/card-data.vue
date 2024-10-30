<script setup lang="ts">
import { NCard, NGrid,NGi } from 'naive-ui'
import { computed } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import SvgIcon from '@/components/SvgIcon/index.vue'
defineOptions({
  name:'CardData'
})
interface CardData {
  key: string;
  title: string;
  value: number;
  unit: string;
  color: {
    start: string;
    end: string;
  };
  icon: string;
}
const cardData = computed<CardData[]>(() => [
  {
    key: 'visitCount',
    title: '访问量',
    value: 9898,
    unit: '',
    color: {
      start: '#ec4786',
      end: '#b955a4'
    },
    icon: 'PageView'
  },
  {
    key:'turnover',
    title:'成交额',
    value:1000000,
    unit:'',
    color:{
      start: '#865ec0',
      end: '#5144b4'
    },
    icon:'volume'
  },
  {
    key:'downloadCount',
    title:'下载量',
    value:9898,
    unit:'',
    color:{
      start: '#56cdf3',
      end: '#719de3'
    },
    icon:'download'

  },
  {
    key: 'dealCount',
    title: '成交量',
    value: 9898,
    unit: '',
    color: {
      start: '#fcbc25',
      end: '#f68057'
    },
    icon: 'turnover'
  }

]);
function getGradientColor(color:CardData['color']){
  return `linear-gradient(to bottom right ,${color.start},${color.end})`;

}

interface GradientBgProps {
  gradientColor: string
}
const  [ DefineGradientBg ,  GradientBg ] = createReusableTemplate<GradientBgProps>();
</script>
<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <DefineGradientBg v-slot="{ $slots, gradientColor }">
      <div class="rd-8px px-16px pb-4px pt-8px text-white" :style="{ backgroundImage: gradientColor }">
        <component :is="$slots.default" />
      </div>
    </DefineGradientBg>
    <NGrid cols="s:1 m:2 l:4" responsive="screen" :x-gap="16" :y-gap="16">
      <NGi v-for="item in cardData" :key="item.key">
        <GradientBg :gradient-color="getGradientColor(item.color)" class="flex-1">
          <h3 class="text-16px">{{ item.title }}</h3>
          <div class="flex justify-between pt-12px">
            <SvgIcon :name="item.icon"  class="text-32px" />
            <span>{{item.value}}</span>
          </div>
        </GradientBg>
      </NGi>
    </NGrid>
  </NCard>
</template>

<style scoped>

</style>

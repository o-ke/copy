<script setup lang="ts">

import { NCard, NGi, NGrid, NSpace, NStatistic } from 'naive-ui'
import { useAppStore } from '@/stores/modules/app';
import { computed,reactive } from 'vue'
interface StatisticData {
  id:number,
  label:string,
  value:string,
}
const statisticData = computed<StatisticData[]>(() => [
  {
    id: 0,
    label: "项目数",
    value: '25'
  },
  {
    id: 1,
    label: "代办",
    value: '4/16'
  },
  {
    id: 2,
    label: "消息",
    value: '12'
  }
]);
const AppStore = useAppStore()
const gap = computed(() => (AppStore.isMobile? 0:16))
defineOptions({
  name:'HeaderBanner'
})
</script>

<template>
  <NCard
    :bordered="false"
    class=" NCard card-wrapper"
  >
    <NGrid :x-gap="gap" :y-gap="16" responsive="screen" item-responsive>
      <NGi span="24 s:24 m:10">
        <div class=" flex items-center" >
          <div class="size-72px overflow-hidden rd-1/2">
            <img src="@/assets/img/girl.gif" class="size-full" alt="">
          </div>
          <div class="pl-12px  ">
            <!--      这里的名字需要该为全局,数据请求-->
            <h3 class="text-18px font-semibold"> 早安，Soybean，今天又是充满活力的一天!</h3>
            <p class="span-class"  style="color: #8b8b8c">今日多云转晴，20℃&nbsp;-&nbsp;25℃</p>
          </div>
        </div>
      </NGi>
      <NGi span="24 s:24 m:14">
        <NSpace :size="24" justify="end">
          <NStatistic v-for="item in statisticData" :key="item.id" class="whitespace-nowrap" v-bind="item" />
        </NSpace>
      </NGi>
    </NGrid>

  </NCard>

</template>

<style scoped>

</style>

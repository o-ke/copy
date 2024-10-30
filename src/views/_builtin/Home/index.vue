<script setup lang="ts" name="index">
import { NAlert, NCard, NGi, NGrid, NSpace } from 'naive-ui'
import { computed } from 'vue'
import HeaderBanner from '@/views/_builtin/Home/Modules/header-banner.vue'
import { useAppStore } from '@/stores/modules/app'
import ProjectNews from '@/views/_builtin/Home/Modules/project-news.vue'
import CreativityBanner from '@/views/_builtin/Home/Modules/creativity-Banner.vue'
import  { useEcharts } from '@/hooks/common/echarts'
import PieChart from '@/views/_builtin/Home/Modules/pie-chart.vue'
import LineChart from '@/views/_builtin/Home/Modules/line-chart.vue'
import CardData from '@/views/_builtin/Home/Modules/card-data.vue'
const appStore = useAppStore()
const gap = computed(() => (appStore.isMobile ? 0 : 16));


</script>
<template>
    <div class="bg-[#f4f7f9] h-full w-auto p-20px ">
<!--     这里div代表欢迎栏-->
      <NSpace vertical :size="16">
<!--        <NAlert title="警告" type="warning" >-->
<!--          为了方便大家开发和更新合并，我们对main分支的代码进行了精简，只保留了首页菜单，其余内容已移至example分支进行维护。预-->
<!--          览地址显示的内容即为example分支的内容。-->
<!--        </NAlert>-->
          <HeaderBanner/>
          <CardData></CardData>
          <NCard :bordered="false" class="card-wrapper bg-[#f4f7f9]">
          <NGrid style="margin-bottom: 20px"  :x-gap="gap" :y-gap="16" responsive="screen" item-responsive>
            <NGi span="24 s:24 m:14">
              <LineChart/>
            </NGi>
            <NGi span="24 s:24 m:10">
              <PieChart></PieChart>
            </NGi>
          </NGrid>
          <NGrid :x-gap="gap" :y-gap="16" responsive="screen" item-responsive>
            <NGi span="24 s:24 m:14">
              <ProjectNews></ProjectNews>
            </NGi>
            <NGi span="24 s:24 m:10">
              <CreativityBanner />
            </NGi>
          </NGrid>
        </NCard>
      </NSpace>
      </div>

</template>

<style scoped>



.img{
  border-radius: 100%;
  max-width: 100%;
  max-height: 100%;
  min-width: 72px;
  min-height: 72px;
  display: block;
}

</style>

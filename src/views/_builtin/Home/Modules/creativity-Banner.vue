<script setup lang="ts">
import { NCard } from 'naive-ui'
import SvgIcon from '@/components/SvgIcon/index.vue'

defineOptions({
  name:'CreativityBanner'
})
</script>

<template>
  <NCard title="创意" :bordered="false" size="small" class="h-full">
    <div class="h-full flex-center text-align-center">
        <SvgIcon style="width: 100%;height: 100%;" class="text-400px text-primary" name="mao"></SvgIcon>
    </div>
  </NCard>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { useAttrs } from 'vue'
const $attrs= useAttrs()
defineOptions({
  name: 'SvgIcon',
})
defineProps({
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  //svg矢量图的名字
  name:  {
    type: String,
    default: '#icon-'
  } ,
  //svg图标的颜色
  color: {
    type: String,
    default: "black"
  },
 })


</script>

<template>
    <svg :style="$attrs.style" :class="$attrs.class">
      <use :href="prefix + name" :fill="color"></use>
    </svg>
</template>

<style scoped>

</style>

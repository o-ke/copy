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
    <svg :style="$attrs.style" :class="$attrs.class" aria-hidden="true" width="1em" height="1em">
      <use :href="prefix + name" fill="currentColor"></use>
    </svg>
</template>

<style scoped>

</style>


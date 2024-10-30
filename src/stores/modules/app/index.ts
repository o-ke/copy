import { defineStore } from 'pinia'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const useAppStore = defineStore("app",() =>{

  const breakpoints = useBreakpoints(breakpointsTailwind);

  const isMobile = breakpoints.smaller("sm")

  return {
    isMobile
  }
})

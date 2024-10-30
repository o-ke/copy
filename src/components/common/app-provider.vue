<script setup lang="ts">

import { NDialogProvider, NLoadingBarProvider, NMessageProvider, NNotificationProvider } from 'naive-ui'
</script>

<template>
  <NLoadingBarProvider>
    <NMessageProvider>
      <NNotificationProvider>
        <NDialogProvider>
          <slot></slot>
        </NDialogProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </NLoadingBarProvider>
</template>

<style scoped>

</style>

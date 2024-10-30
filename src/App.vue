<script setup lang="ts">
import {} from 'vue-router'
import {NMessageProvider,NConfigProvider} from 'naive-ui'
</script>

<template>
    <NConfigProvider
    class="h-full"
    >
      <NMessageProvider >
        <RouterView/>
      </NMessageProvider>
    </NConfigProvider>

</template>


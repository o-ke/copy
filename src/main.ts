import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:uno.css'
import './style/css/index.css'

import 'virtual:svg-icons-register'
import { router } from '@/router'
//svg插件
import gloablComponent from '@/components/index';
// import {setupLoading} from '@/plugins/loading'

async function SetUpApp(){
  const app = createApp(App);
  app.use(router)

  // setupLoading();
  app.use(gloablComponent);
  app.use(createPinia())
  app.mount('#app')
}
SetUpApp();

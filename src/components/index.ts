import  SvgIcon from './SvgIcon/index.vue'
import type {App,Component} from 'vue'
const components :{[name:string]:Component} = {SvgIcon};

export default {
  install (app: App) {
        Object.keys(components).forEach((name:string) => {
          app.component(name, components[name])
        })
  }
};



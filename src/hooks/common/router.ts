import { router as globalRouter } from '@/router'
import { useRouter } from  'vue-router'
import type { RouteKey } from '@/elegant-router/types'
import type { RouteLocationRaw } from 'vue-router'

export function useRouterPush(isSetup = true){
  const router = isSetup ?  useRouter() : globalRouter
  const route = globalRouter.currentRoute;

  const routerRush = router.push
  const routerBack = router.back


  interface RouterPushOption  {
    params?:Record<string, string>
    query?:Record<string, string>
  }


  function routerPushByKey(key: RouteKey, options?: RouterPushOption) {
    const { params, query } = options || {}

    const routeLocation:RouteLocationRaw = {
      name:key
    }

    if(Object.keys(params || {}).length > 0){
      routeLocation.params = params
    }
    if(Object.keys(query || {}).length > 0){
      routeLocation.query = query
    }

     return routerRush(routeLocation);
  }

  function toggleLoginModule(module){
    const query = route.value.query as Record<string, string>
    return routerPushByKey("login",{query,params:{module}})
  }
return{
  routerPushByKey,
  toggleLoginModule

}

}

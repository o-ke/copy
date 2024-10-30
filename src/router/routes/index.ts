export const routes = [
  {
    path:'/login',
    component:() => import("@/views/_builtin/login/index.vue"),
    redirect:'/login/pwd',
    children:[
      {
        path:'code',
        component:() => import("@/views/_builtin/login/Modules/code-login.vue"),
      },
      {
        path:'pwd',
        component:() => import("@/views/_builtin/login/Modules/pwd-login.vue"),
      },
      {
        path:'pwdreg',
        component:() => import("@/views/_builtin/login/Modules/pwd-register.vue"),
      },
      {
        path:'reg',
        component:() => import("@/views/_builtin/login/Modules/register.vue"),
      }
    ]
  },
  {
    path:'/',
      redirect:'/login'
  },
  {
    path:'/home',
    component:() => import("@/views/_builtin/Home/index.vue"),
  }
]

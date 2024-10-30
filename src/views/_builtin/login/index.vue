<script setup lang="ts">
defineOptions({
  name: 'Login-index'
})
import { colord } from 'colord'
import SvgIcon from '@/components/SvgIcon/index.vue'
import LogRegister from '@/views/_builtin/login/Modules/register.vue'
import PwdRegister from '@/views/_builtin/login/Modules/pwd-register.vue'
import PwdLogin from '@/views/_builtin/login/Modules/pwd-login.vue'
import CodeLogin from '@/views/_builtin/login/Modules/code-login.vue'

// import { ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NCard, NSpace, NButton, NDropdown, NForm, NFormItem, NInput, NRow, NCol, NCheckbox } from 'naive-ui'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)


const options = [
  {
    label: '中文',
    key: 'marina bay sands'
  },
  {
    label: 'English',
    key: 'brown\'s hotel, london'
  }

]
const add = "linear-gradient(125deg, rgb(255, 160, 252) 0%, rgb(246, 153, 156) 50%, rgb(247, 255, 88) 100%)"
// function validatePasswordStartWith(
//   rule: FormItemRule,
//   value: string
// ): boolean {
//   return (
//     !!modelRef.value.password
//     && modelRef.value.password.startsWith(value)
//     && modelRef.value.password.length >= value.length
//   )
// }
// function validatePasswordSame(rule: FormItemRule, value: string): boolean {
//   return value === modelRef.value.password
// }


//  const moduleMap = {
//   'Register': { label: '注册页面', component: LogRegister },
//   'PwdRegister': { label: '重置密码', component: PwdRegister },
//   'PwdLogin': { label: '登录页面', component: PwdLogin },
//   'CodeLogin': { label: '验证码登录', component: CodeLogin }
// }

</script>

<template>
  <div :style="`background-image: ${add}`"
       class=" flex   items-center justify-center size-full flex-center overflow-hidden w-full h-full ">
    <div class="w-400px lt-sm:w-300px ">
      <NCard :bordered="false " class="rounded-3xl" :style="`background-color: #ffffff`">
        <div class="relative z-4 w-auto rd-12px items-center">
          <header class="w-auto flex justify-center  items-center justify-between p-4  ">
            <SvgIcon name="heimao" style="width: 80px;height: 80px" class=""></SvgIcon>
            <h3>Soybean管理系统</h3>
            <div class="flex flex-col ">
              <NSpace class="flex flex-col justify-center items-center">
                <NButton quaternary type="primary">
                  <SvgIcon class="w-6 h-6 " name="太阳"></SvgIcon>
                </NButton>

              </NSpace>
              <NSpace >
                <NDropdown trigger="hover" :options="options">
                  <NButton style="border:none">
                    <SvgIcon class="w-6 h-6 " name="language-copy"></SvgIcon>
                  </NButton>
                </NDropdown>
              </NSpace>
            </div>
          </header>
          <main class="w-auto pt-24px h-auto relative md:relative md:bottom-0 md:right-0">
            <RouterView ></RouterView>
<!--                      <h3 >{{moduleMap.PwdLogin.label}}</h3>-->

<!--                        <transition mode="out-in" appear name="PwdRegister">-->
<!--                          <component :is='moduleMap.PwdLogin.component'/>-->
<!--                        </transition>-->

          </main>
        </div>
      </NCard>
    </div>
  </div>
</template>

<style scoped>

</style>

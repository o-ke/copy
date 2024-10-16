<script setup lang="ts">
import {
  type FormInst, type FormItemInst,
  type FormItemRule,
  type FormRules,
  NButton,
  NCheckbox,
  NCol,
  NForm,
  NFormItem,
  NInput,
  NRow,
  NSpace, useMessage
} from 'naive-ui'
import {useRouter} from 'vue-router'
import { ref,useAttrs } from 'vue'
interface style{
  width?:string
  height?:string
  display?:string
}
const $attrs:style= useAttrs()
const Router = useRouter()

const formRef = ref<FormInst | null>(null)
const rules: FormRules = {
  username: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('需要名称')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],

}
ref<FormItemInst | null>(null)
const message = useMessage()
defineOptions({
  name:"Pwd-Login"
})

function  handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('登录成功')
    }
    else {
      console.log(errors)
      message.error('登录失败')
    }
  })
}
// 路由跳转
function  RouteJump(name: string) {
  Router.push(name)
}

interface ModelType {
  username: string | null
  password: string | null
}
const model = ref<ModelType>({
  username: "Soybean",
  password: "admin",
})
// 按钮
const button = ref(false);

</script>

<template>
<!--原登录页-->
  <h3 class="text-18px text-primary font-medium">密码登录</h3>
  <div class="reactive pt-24px" >
    <NForm   ref="formRef" :model="model" :rules="rules" >
      <NFormItem path="userName">
        <NInput style="width: 100%" v-model:value="model.username" type="text" @keydown.enter.prevent />
      </NFormItem>
      <NFormItem path="password">
        <NInput
          v-model:value="model.password"
          show-password-on="click"
          type="password"
          @keydown.enter.prevent
        />
      </NFormItem>

      <div class="flex justify-between" >
        <NSpace vertical :size="24">
          <NCheckbox v-model:checked="button" >
            记住我
          </NCheckbox>
        </NSpace>
        <NSpace>
          <n-button text @click="RouteJump('/login/pwdreg')">
            忘记密码？
          </n-button>
        </NSpace>
      </div>
      <NRow :gutter="[0, 24]">
        <NCol :span="24">
          <div style="display: flex; justify-content: center" class="w-full">
            <NButton
              round
              type="primary"
              @click="handleValidateButtonClick"
              class="w-full"
            >
              登录
            </NButton>
          </div>
        </NCol>
      </NRow>
    </NForm>
    <div class="flex justify-between gap-12px ">
      <NButton class="flex-1" block  @click="RouteJump('/login/code')" >验证码登录</NButton>
      <NButton class="flex-1" block  @click="RouteJump('/login/reg')">注册账号</NButton>
    </div>
  </div>
</template>

<style scoped>

</style>

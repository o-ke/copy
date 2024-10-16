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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
defineOptions({
  name: 'Pwd-Register'
})

interface ModelType {
  phone: string | null
  code: string | null
  password: string | null
  reenteredPassword: string | null
}

const ModelValue: ModelType = {
  phone: '',
  code: '',
  password: '',
  reenteredPassword: ''
}
const router = useRouter()
function BackButtonClick(e: MouseEvent){
  router.push("/login")
}
const formRef = ref<FormInst | null>(null)
const message = useMessage()
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
</script>

<template>
  <!--重置密码页-->
  <h3 class="text-18px text-primary font-medium">重置密码</h3>
   <div >
     <NForm :model="ModelValue">
       <NFormItem path="phone">
         <NInput v-model:vlaue="ModelValue.phone" placeholder="请输入手机号"></NInput>
       </NFormItem>
       <NFormItem path="code">
         <NInput v-model:vlaue="ModelValue.code"

                 placeholder="请输入验证码"></NInput>
       </NFormItem>
       <NFormItem path="password">
         <NInput v-model:vlaue="ModelValue.password"
                 type="password"
                 show-password-on="click"
                 placeholder="请输入密码"></NInput>
       </NFormItem>
       <NFormItem path="reenteredPassword">
         <NInput v-model:vlaue="ModelValue.reenteredPassword"
                 type="password"
                 show-password-on="click"
                 placeholder="请重复输入密码"></NInput>
       </NFormItem>

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
       <NRow :gutter="[0, 24]">
         <NCol :span="24">
           <div style="display: flex; justify-content: center" class="w-full">
             <NButton
               round
               type="primary"
               @click="BackButtonClick"
               class="w-full"
             >
               返回
             </NButton>
           </div>
         </NCol>
       </NRow>
     </NForm>
   </div>
</template>

<style scoped>

</style>

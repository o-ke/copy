<script setup lang="ts">
import { type FormInst, NButton, NCol, NForm, NFormItem, NInput, NRow, useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
interface ModelType {
  phone: string | null
  code:string | null
}
/**
 * 表单缺乏 缺少规则（rules）
 *
 * */
const ModelValue:ModelType = {
  phone:'',
  code:'',
}
defineOptions({
  name:"Code-Login"
})
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
<!--验证吗登录页-->
  <h3 class="text-18px text-primary font-medium">验证吗登录</h3>
  <div  >
    <NForm ref="forRef" size="large" :show-label="false"  :model="ModelValue">
      <NFormItem path="phone" >
        <NInput v-model:value="ModelValue.phone" placeholder="请输入手机号"></NInput>
      </NFormItem>
      <NFormItem path="code" >
        <div class="flex w-full justify-between">
          <NInput v-model:value="ModelValue.code" placeholder="请输入验证码"></NInput>
          <NButton class="flex-1" block  >获取验证码</NButton>
        </div>
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

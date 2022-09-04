<template>
  <div></div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Toast } from 'vant'
import 'vant/es/toast/style'
import { userLogin } from '@/api/user'

const route = useRoute()

const code = route.query.code

const login = async () => {
  try {
    const res = await userLogin(code)
    if (res.success) {
      window.localStorage.setItem('uuid', res.data)
      Toast.success('授权成功')
      setTimeout(function () {
        window.close()
      }, 1000)
    } else {
      Toast.fail('授权失败')
    }
  } catch (error) {
    console.error(error)
    Toast.fail('授权失败')
  }
}

login()

</script>

<style scoped>
  div{
    width: 100%;
    height: 100%;
  }
</style>

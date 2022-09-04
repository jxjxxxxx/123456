<template>
  <van-form class="address-form">
    <van-cell-group inset border>
      <div class="address-form-item-label">收件人姓名</div>
      <van-field class="address-form-item-input" v-model="userinfo.address" name="address" placeholder="请输入收货人姓名" />
      <div class="address-form-item-label">收件人电话</div>
      <van-field class="address-form-item-input" v-model="userinfo.phoneNum" name="recipient" placeholder="请输入手机号" />
      <div class="address-form-item-label">收件人地址</div>
      <van-field class="address-form-item-input" v-model="userinfo.recipient" name="phoneNum" placeholder="请输入收件地址" />
    </van-cell-group>
  </van-form>

  <TabBar :type="1" @post="saveAddress()" />
</template>

<script setup>
import { reactive } from 'vue'
import { Toast } from 'vant'
import 'vant/es/toast/index.css'
import 'vant/es/popup/index.css'
import 'vant/es/loading/index.css'
import { authorize, getUserAddress, updateUserAddress } from '@/api/user.js'

const init = async () => {
  Toast.loading({
    message: '加载中',
    duration: 0,
    className: 'toast',
    forbidClick: true
  })
  try {
    const res = await getUserAddress()
    if (res.success) {
      setTimeout(() => Toast.clear(), 250)
      userinfo.address = res.data.address
      userinfo.phoneNum = res.data.phoneNum
      userinfo.recipient = res.data.recipient
    } else if (res.code === 4001) {
      Toast('请重新登录')
      setTimeout(function () {
        authorize()
      }, 1000)
    } else {
      Toast.fail('网络异常')
    }
  } catch (error) {
    console.error(error)
    Toast.fail('网络异常')
  }
}

/**
 * 用户信息列表
 * @type {{address: string, recipient: string, phoneNum: string}}
 */
const userinfo = reactive({
  address: '',
  recipient: '',
  phoneNum: ''
})

/**
 * 更新用户信息
 */
const saveAddress = async () => {
  const res = await updateUserAddress(userinfo)
  if (res.success) {
    Toast.success('保存成功')
  } else {
    Toast.fail('保存失败')
  }
}

init()
</script>

<style>
.toast {
  --van-popup-background-color: rgba(25, 25, 25, 0.75) !important;
}
</style>

<style scoped lang="less">
.address-form {
  padding: 3.3vw 0 !important;

  .address-form-item-label {
    color: #6F6F6F;
    font-size: 2.4vw;
    letter-spacing: 1px;
    line-height: 1.5em;

    margin: 0.7vw 0;
  }

  .address-form-item-input {
    color: #9B9B9B;
    font-size: 2.4vw;
    line-height: 1.5em;
    letter-spacing: 1px;
    border-bottom: 1px solid #ccc;

    margin: 5px 0 6.7vw;
    --van-cell-vertical-padding: 0 !important;
    --van-cell-horizontal-padding: 0 !important;
    --van-field-input-text-color: #9B9B9B !important;
  }
}
</style>

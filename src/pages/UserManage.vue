<template>
  <div id="user-manage-page">
    <div id="user-manage-card">
      <!-- tab-bar -->
      <van-tabbar v-model="active" :fixed="false" route active-color="#676767" inactive-color="#999999" class="card-tab-bar">
        <van-tabbar-item class="card-tab-bar-item" to="/user/turn">获奖记录</van-tabbar-item>
        <van-tabbar-item class="card-tab-bar-item" to="/user/address">收货地址</van-tabbar-item>
      </van-tabbar>

      <!-- 主体页面 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<style scoped lang="less">
@img-size: 1194 / 756;
@card-width: 94vw;
@card-height: calc(@card-width * @img-size);

#user-manage-page {
  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: calc(100vh / 2 - @card-width / 2 * @img-size) calc((100vw - @card-width) / 2);

  #user-manage-card {
    width: @card-width;
    height: @card-height;

    margin: 0;
    padding: 5.3vw 3.3vw;

    background-image: url("./../assets/page-background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;

    .card-tab-bar {
      .card-tab-bar-item {
        --van-tabbar-item-font-size: 2.7vw !important;
        letter-spacing: 1px;
      }
    }
  }
}
</style>

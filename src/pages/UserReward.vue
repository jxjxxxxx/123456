<template>
  <div id="reward-list">
    <div id="list-card">
      <!-- 导航栏 -->
      <van-nav-bar class="card-navbar" title="奖励一览" />

      <!-- 主体内容 -->
      <van-list class="card-container" v-model:loading="listLoading" v-model:error="listError" :finished="listFinished" finished-text="没有更多了" error-text="请求失败，点击重新加载" @load="listLoad" >
          <RewardItem v-for="item in rewards" :key="item.id" :title="item.name" :content="item.description" :img="item.imgUrl" />
      </van-list>

      <!-- 返回栏 -->
      <TabBar :type="0" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'
import 'vant/es/toast/index.css'
import 'vant/es/popup/index.css'
import 'vant/es/loading/index.css'
import { getPrizeList } from '@/api/price.js'
import { authorize } from '@/api/user'

/**
 * @typedef Reward {object}
 * @property id {number} 奖励ID
 * @property title {string} 奖励标题
 * @property content {string} 奖励内容
 * @property imgUrl {string} 奖励图片URL
 */

/**
 * 奖励列表
 * @type {Ref<Reward[]>}
 */
const rewards = ref([])

const listLoading = ref(false)
const listError = ref(false)
const listFinished = ref(false)

const listLoad = async () => {
  listLoading.value = false
  const res = await getPrizeList()
  rewards.value = res.data
}

const init = async () => {
  Toast.loading({
    message: '加载中',
    duration: 0,
    className: 'toast',
    forbidClick: true
  })
  try {
    const res = await getPrizeList()
    if (res.success) {
      setTimeout(() => Toast.clear(), 500)
      rewards.value = res.data
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

init()
</script>

<style>
.toast {
  --van-popup-background-color: rgba(25, 25, 25, 0.75) !important;
}
</style>

<style scoped lang="less">
@card-width: 94vw;
@card-height: calc(@card-width * 1194 / 756);

#reward-list {
  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: calc(100vh / 2 - @card-width / 2 * 1194 / 756) calc((100vw - @card-width) / 2);

  #list-card {
    width: @card-width;
    height: @card-height;

    margin: 0;
    padding: 5.3vw 3.3vw;

    background-image: url("./../assets/page-background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;

    .card-navbar {
      --van-nav-bar-title-font-size: 5.3vw !important;
      --van-nav-bar-title-text-color: #666666 !important;
      --van-nav-bar-height: 13.3vw;
      line-height: 13.3vw !important;
      border-bottom: 1px solid #656565;
    }

    .card-container {
      width: 100%;
      height: calc(100% - 6.7vw - 6.1vw - 7vw);

      margin: 0 0 5px;
      padding: 0;

      overflow: scroll;
    }
  }
}
</style>

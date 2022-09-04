<template>
    <div class="background"></div>
    <div class="fixed">
      <text v-show="!isRolled">点击图片翻牌</text>
      <text v-show="isRolled" style="border:none;color:#502017;font-weight: 400;" @click="again">再翻一次</text>
      <!-- 若未抽中奖励，将不显示分享按钮 -->
      <button v-show="isRolled && reward.id" class="share" @click="share">分享得翻牌次数</button>
      <button v-show="isRolled" @click="toHome" class="return">返回主页</button>
    </div>
    <div class="imgbox">
      <div class="rollbox">
        <div class="rollbox_front" :style="{transform:isRolled?'rotateY(-180deg)':''}" @click="drawOne"></div>
        <div class="rollbox_behind" :style="{transform:isRolled?'rotateY(-360deg)':''}">
          <text v-show="reward.id">{{reward.name}}</text>
          <img v-show="reward.imgUrl" :src="reward.imgUrl">
          <button v-show="reward.id" style="color: #E02222" @click="toRewards">查看奖励</button>
          <div v-show="!reward.id">谢谢参与</div>
        </div>
      </div>
    </div>
    <van-popup v-model:show="isShow" position="bottom" style="height:24.3vw;opacity: 0.8;">
      <SharePop  v-bind:reward="reward" v-bind:num="1"/>
    </van-popup>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { draw } from '@/api/draw'
import { useRouter } from 'vue-router'
import SharePop from '@/components/SharePop.vue'
import { chance } from '@/api/mainPage'
import { authorize } from '@/api/user'
import { Toast } from 'vant'
import 'vant/es/toast/style'

/**
 * 奖励信息列表
 * @type {{imgUrl: string, name: string, id: string, description: string}}
 */
const reward = reactive({
  imgUrl: '',
  name: '',
  id: '',
  description: ''
})

// 路由跳转
const router = useRouter()
// 点击返回主页后跳转至主页
const toHome = () => {
  router.push({
    path: '/'
  })
}
// 点击查看奖励后跳转至奖励一览
const toRewards = () => {
  router.push({
    path: '/rewards'
  })
}

// 判断是否翻牌的参数
const isRolled = ref(false)
// 抽卡一次
const drawOne = async () => {
  try {
    const res = await draw()
    console.log(res)
    if (res.success) {
      // 卡片翻面
      isRolled.value = !isRolled.value
      if (res.msg !== '谢谢参与') {
        // 得到奖励数据
        reward.imgUrl = res.data.imgUrl
        reward.id = res.data.id
        reward.name = res.data.name
        reward.description = res.data.description
      }
    } else {
      if (res.code === 4001) {
        Toast('请重新登录')
        setTimeout(function () {
          authorize()
        }, 1000)
      }
    }
  } catch (error) {
    console.log('errrrror')
  }
}
// 再抽一次
const again = async () => {
  const c = await chance()
  if (c.data >= 1) {
    isRolled.value = !isRolled.value
  } else {
    Toast('抽卡次数不足')
  }
}
// 分享弹出层的参数
const isShow = ref(false)
// 分享弹窗弹出
const share = async () => {
  isShow.value = !isShow.value
}

</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }

    .background{
        height: 100vh;
        width: 100vw;
    }

    .fixed{
        position: fixed;
        height: 130.7vw;
        width: 85.4vw;
        left: 7.3vw;
        top: 10.7vw;
        border-radius: 2.7vw;
        text-align: center;
        background-image: url("./../assets/page-background.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
        z-index: 1;
        opacity: 0.8;
        padding-top: 90vw;
    }

    .imgbox{
      position: fixed;
      left: 14vw;
      top: 24vw;
      width: 72vw;
      height: 72vw;
      padding-top: 13.4vw;
      text-align: center;
      background-color: #ffffff;
      border: 1px solid #999999;
      border-radius: 2.7vw;
      z-index: 2;
    }

    .rollbox{
      width: 27.4vw;
      height: 45.2vw;
      margin: 0 23vw;
      background-color: #441313;
      padding: 0.55vw 0.7vw;
      opacity: 1;
      z-index: 3;
    }

    .rollbox_front,.rollbox_behind{
      position: absolute;
      width: 26vw;
      height: 44.1vw;
      background-repeat: no-repeat;
      background-size: 100%;
      background-image: url("./../assets/card-back.png");
      backface-visibility:hidden;
      transition:all 2s;
      perspective:1000;
      z-index: 3;
    }

    .rollbox_behind{
        background-image: url("./../assets/card.png");
        transform:rotateY(-180deg);
    }

    .rollbox_behind img{
      height: 17vw;
      width: 17vw;
      position: absolute;
      left: 4.5vw;
      top: 13.3vw;
    }

    .rollbox_behind button{
      position: absolute;
      left: 2.75vw;
      bottom: 1.5vw;
      margin: 0;
      height: 5.9vw;
      width: 20.5vw;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 2.7vw;
      background: #DDDDDD;
      border: 1px solid #999999;
      border-radius: 1vw;
      color: #000000;
    }

    .rollbox_behind text{
      position: relative;
      top:4.9vw;
      font-size: 2.7vw;
      color:#ffffff;
      font-family: 'STZhongsong';
      font-style: normal;
      font-weight: 400;
    }

    .rollbox_behind div{
      width: 24vw;
      height: 38vw;
      position: absolute;
      left: 1vw;
      top: 3vw;
      background: #DDDDDD;
      border: 1px solid #999999;
      line-height: 38vw;
      text-align: center;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 3.7vw;
      color: #000000;
    }

    text{
      font-family: 'STZhongsong';
      font-style: normal;
      font-weight: 400;
      font-size: 4.3vw;
      color: #441313;
    }

    button{
      display: block;
      width: 24.7vw;
      height: 8vw;
      font-size: 3.9vw;
      border-radius: 4vw;
      font-weight: 400;
      background: radial-gradient(69.21% 65.09% at 50% 23.58%, #EDDD8C 0%, #C0A060 100%);
      border: 1px solid #84592F;
      box-shadow: 0 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
      font-family: 'STZhongsong';
      color: #502017;
    }

    .share{
      position: absolute;
      bottom: 21vw;
      left: 24.1vw;
      width: 37.2vw;
      height: 8.7vw;
      color: #502017;
    }

    .return{
      position: absolute;
      bottom: 7vw;
      left: 30.35vw;
    }
</style>

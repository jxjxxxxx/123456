<template>
    <div class="background"></div>
    <div class="fixed">
      <button class="all" v-show="!isAllRolled" @click="click?drawAll():''">全部翻开</button>
      <button class="all" v-show="isAllRolled" style="border:none;color:#502017;font-weight: bold;" @click="click?'':again()">再翻10次</button>
      <!-- 若未抽中奖励，将不显示分享按钮 -->
      <button v-show="isAllRolled&&hasReward" class="share" @click="share">分享得翻牌次数</button>
      <button class="return" v-show="isAllRolled" @click="toHome">返回主页</button>
    </div>
    <div class="imgbox">
      <div class="rollBox" v-for="(reward, index) in rewardList" :key="index">
        <div class="rollbox_front" :style="{transform:rewardList[index].isRolled?'rotateY(-180deg)':''}" @click="drawOne(index)"></div>
        <div class="rollbox_behind" :style="{transform:rewardList[index].isRolled?'rotateY(-360deg)':''}">
          <text v-show="reward.id">{{reward.name}}</text>
          <img v-show="reward.imgUrl" :src="reward.imgUrl">
          <button v-show="reward.id" style="color: #E02222" @click="toRewards">查看奖励</button>
          <div v-show="!reward.id">谢谢参与</div>
        </div>
      </div>
    </div>
    <van-popup v-model:show="isShow" position="bottom" style="height:24.3vw;opacity: 0.8;">
      <SharePop  v-bind:reward="rewardList" v-bind:num="10"/>
    </van-popup>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, reactive, computed } from 'vue'
import { chance } from '@/api/mainPage'
import { authorize } from '@/api/user'
import { draw } from '@/api/draw'
import { Toast } from 'vant'
import 'vant/es/toast/style'

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

// 判断牌是否全部翻开
const isAllRolled = computed(() => {
  let i = true
  for (let j = 0; j < 10; j++) {
    i = i && rewardList[j].isRolled
  }
  return i
})
// 判断是否有中奖
const hasReward = ref(false)
// 分享弹出层的参数
const isShow = ref(false)
/**
 * 翻牌奖励数据
 * @type {{imgUrl: string, name: string, id: string, description: string, isRolled: boolean}}
 */
const rewardList = reactive([
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  },
  {
    imgUrl: '',
    name: '',
    id: '',
    description: '',
    isRolled: false
  }
])

// 一张一张翻牌
const drawOne = async (index) => {
  try {
    const res = await draw()
    if (res.success) {
      rewardList[index].isRolled = !rewardList[index].isRolled
      if (res.msg !== '谢谢参与') {
        rewardList[index].imgUrl = res.data.imgUrl
        rewardList[index].name = res.data.name
        rewardList[index].id = res.data.id
        hasReward.value = true
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
// 全部翻开
const click = ref(true) // 防止翻牌过程中再次点击翻牌
const drawAll = async () => {
  try {
    click.value = false
    for (let j = 0; j < 10; j++) {
      if (!rewardList[j].isRolled) {
        await drawOne(j)
      }
    }
  } catch (error) {
  }
}
// 再抽十次
const again = async () => {
  const c = await chance()
  if (c.data >= 10) {
    hasReward.value = false
    click.value = true
    for (let j = 0; j < 10; j++) {
      rewardList[j].isRolled = false
    }
  } else {
    Toast('抽卡次数不足')
  }
}
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
        height: 162.7vw;
        width: 85.4vw;
        left: 7.3vw;
        top: 2.7vw;
        border-radius: 2.7vw;
        background-image: url("./../assets/page-background.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
        padding-top: 130vw;
        opacity: 0.8;
    }

    .imgbox{
      position: fixed;
      left: 16vw;
      top: 13.3vw;
      width: 68vw;
      height: 118vw;
      padding-top: 0.5vw;
      padding-left: 2.7vw;
      background-color: #ffffff;
      border: 1px solid #999999;
      border-radius: 2.7vw;
      opacity: 1;
      z-index: 2;
    }

    .rollBox{
      display: inline-block;
      width: 17.2vw;
      height: 25.7vw;
      background-color: #441313;
      padding: 0.6vw 0.8vw;
      margin-bottom: 0;
      margin-right: 5.5vw;
      margin-top: 2.4vw;
    }

    .rollBox:nth-of-type(3n){
      margin-right: 0;
    }

    .rollBox:last-of-type{
      margin: 2.4vw 22.8vw 0 !important;
    }

    .rollbox_front,.rollbox_behind{
      position: absolute;
      width: 15.6vw;
      height: 24.3vw;
      background-repeat: no-repeat;
      background-size: 100%;
      background-image: url("./../assets/card-back.png");
      backface-visibility:hidden;
      transition:all 2s;
      perspective:1000;
    }

    .rollbox_behind{
        background-image: url("./../assets/card.png");
        transform:rotateY(-180deg);
        text-align: center;
    }

    button{
      display: block;
      width: 24.7vw;
      height: 6.7vw;
      font-size: 3.9vw;
      border-radius: 4vw;
      font-weight: 400;
      background: radial-gradient(69.21% 65.09% at 50% 23.58%, #EDDD8C 0%, #C0A060 100%);
      border: 1px solid #84592F;
      box-shadow: 0 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
      font-family: 'STZhongsong';
      color: #502017;
    }

    .all{
      font-family: 'STZhongsong';
      font-size: 3.2vw;
      font-weight: 800;
      color: #502017;
      background: none;
      box-shadow: none;
      border: none;
      margin-left: 30.35vw;
    }

    .share{
      position: absolute;
      bottom: 19vw;
      left: 24.1vw;
      width: 37.2vw;
      color: #502017;
    }

    .return{
      position: absolute;
      bottom: 7vw;
      left: 30.35vw;
    }

    .rollbox_behind img{
      height: 10.3vw;
      width: 10.3vw;
      position: absolute;
      left: 2.65vw;
      top: 7vw;
    }

    .rollbox_behind button{
      position: absolute;
      left: 1.65vw;
      bottom: 0vw;
      height: 3vw;
      width: 12.3vw;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 1.9vw;
      background: #DDDDDD;
      border: 1px solid #999999;
      border-radius: 1vw;
      color: #000000;
    }

    .rollbox_behind text{
      position: relative;
      top:2.5vw;
      font-size: 1.9vw;
      color:#ffffff;
      font-family: 'STZhongsong';
      font-style: normal;
      font-weight: 400;
    }

    .rollbox_behind div{
      width: 14.4vw;
      height: 21.3vw;
      position: absolute;
      left: 0.6vw;
      top: 1.4vw;
      background: #DDDDDD;
      border: 1px solid #999999;
      line-height: 21.3vw;
      text-align: center;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 2.1vw;
      color: #000000;
    }
</style>

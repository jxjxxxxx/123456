<template>
    <text class="tipsOne">长按保存到相册</text>
    <button id="one" @click="toRecord">翻牌记录</button>
    <button id="two" @click="toHome">返回主页</button>
    <div>
    <div id="shareImg">
      <img id="back" :src="imgUrl" crossorigin="anonymous">
      <div class="rollboxOne" v-if="num == 1">
        <div class="rollbox_behind_One">
          <text>{{reward.name}}</text>
          <img :src="reward.imgUrl" v-show="reward.imgUrl" crossorigin="anonymous">
        </div>
        <div class="qrcodeOne">
          <div id="codeOne"></div>
        </div>
      </div>
      <div class="tipsTwo">
        <text v-if="num == 10">
          我在荣耀全明星翻牌小游戏抽中了{{reward[0].name}}
        </text>
        <text v-if="num == 1">
          我在荣耀全明星翻牌小游戏抽中了{{reward.name}}
        </text>
        <text>
          快来一起拼手气，扫码加入官方社区参与
        </text>
      </div>
      <div class="rollboxTen" v-for="(item, index) in reward" :key="index" v-show="num == 10">
        <div class="rollbox_behind_Ten">
          <text>{{item.name}}</text>
          <img v-show="item.imgUrl" :src="item.imgUrl" crossorigin="anonymous">
        </div>
      </div>
      <div class="qrcodeTen" v-if="num == 10">
          <div id="codeTen"></div>
      </div>
    </div>
    </div>
    <img :src="canImg" class="canImg" v-show="canImg">
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import html2canvas from 'html2canvas'
import { qrcanvas } from 'qrcanvas'
import { backImg } from '@/api/share'

/**
 * 从路由参数中获取奖励信息
 * @typedef Reward {object}
 * @property id {number} 奖励ID
 * @property imgUrl {string} 翻牌奖励图片
 * @property description {string} 翻牌奖励描述
 * @property type {string} 翻牌奖励类型
 * @property name {string} 翻牌奖励名字
 */
const reward = ref(null)
const num = ref(null) // 从路由参数中接收，用于判断是一抽还是十抽
const route = useRoute()
const router = useRouter()
const getQuery = () => {
  num.value = route.query.num
  reward.value = JSON.parse(route.query.reward)
  console.log(reward.value.name)
  if (num.value === '10') {
    reward.value = reward.value.filter((item) => {
      return item.id
    })
  }
}
getQuery()

/**
 * 点击返回主页后跳转至主页
 */
const toHome = () => {
  router.push({
    path: '/'
  })
}
/**
 * 点击翻牌记录后跳转
 */
const toRecord = () => {
  router.push({
    path: '/user/turn'
  })
}

/**
 * 获取分享的背景图片
 * @property imgUrl {string} 背景图片地址
 */
const imgUrl = ref(null)
const getBack = async () => {
  try {
    const res = await backImg()
    if (res.success) {
      imgUrl.value = res.data
      console.log('得到背景图')
    }
  } catch (error) {
  }
}
onBeforeMount(() => {
  getBack()
})

/**
 * 转化页面为图片
 * @property canImg {string} 转化为的图片地址
 */
const canImg = ref(null)
const drawImage = () => {
  const node = document.querySelector('#shareImg')
  html2canvas(node, {
    useCORS: true,
    allowTaint: false
  }).then(function (canvas) {
    canImg.value = canvas.toDataURL('image/png')
  }).catch(function (error) {
    console.log(error)
  })
}
/**
 * 生成二维码
 */
const getCode = async () => {
  if (num.value === '1') {
    const code = qrcanvas({
      data: 'https://www.baidu.com'
    })
    document.getElementById('codeOne').appendChild(code)
  } else if (num.value === '10') {
    const code = qrcanvas({
      data: 'https://www.baidu.com'
    })
    document.getElementById('codeTen').appendChild(code)
  }
}

onMounted(() => {
  getCode()
  const a = document.querySelector('#back')
  a.onload = function () {
    drawImage()
  }
})

</script>

<style scoped>
    #shareImg{
      width: 100vw;
      height: 100vh;
      padding: 14.6vw 20.7vw;
      overflow: hidden;
    }

    #back{
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      object-position: 50%;
      overflow: hidden;
    }

    button{
      position: fixed;
      color: #ffffff;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 4vw;
      bottom: 9.3vw;
      z-index: 1000;
    }

    #one{
      left:23.7vw;
    }

    #two{
      right:23.7vw;
    }

    .rollboxOne{
      position: fixed;
      top: 24.5vw;
      left: 36.3vw;
      width: 27.4vw;
      height: 45.2vw;
      margin: 0 auto;
      background-color: #441313;
      padding: 1.0vw 0.7vw 0;
      z-index: 3;
      text-align: center;
    }

    .rollbox_behind_One{
      position: relative;
      width: 26vw;
      height: 44.1vw;
      background-repeat: no-repeat;
      background-size: 100%;
      background-image: url("./../assets/card.png");
      z-index: 3;
    }

    .rollbox_behind_One img{
      position: absolute;
      left: 4.5vw;
      top:15vw;
      height: 17vw;
      width: 17vw;
    }

    .rollbox_behind_One text{
      position: relative;
      top:4.9vw;
      font-size: 2.7vw;
      color:#ffffff;
      font-family: 'STZhongsong';
      font-style: normal;
      font-weight: 400;
    }

    .rollboxTen{
      display: inline-block;
      position: relative;
      width: 17.2vw;
      height: 25.9vw;
      margin: 0 auto;
      background-color: #441313;
      padding: 0.7vw 0.7vw 0;
      text-align: center;
      margin-right: 3.5vw;
      margin-top: 2.7vw;
    }

    .rollboxTen:nth-of-type(3n+1){
      margin-right: 0 ;
    }

    .rollbox_behind_Ten{
      position: relative;
      width: 15.6vw;
      height: 24.3vw;
      background-repeat: no-repeat;
      background-size: 100%;
      background-image: url("./../assets/card.png");
      z-index: 3;
    }

    .rollbox_behind_Ten img{
      position: absolute;
      left: 2.65vw;
      top: 7vw;
      height: 10.3vw;
      width: 10.3vw;
    }

    .rollbox_behind_Ten text{
      position: relative;
      top: 2.5vw;
      font-size: 1.9vw;
      color:#ffffff;
      font-family: 'STZhongsong';
      font-style: normal;
      font-weight: 400;
    }

    .tipsOne{
      position: fixed;
      left: 35vw;
      top: 6vw;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 4.3vw;
      color: #FFFFFF;
      z-index: 1000;
    }

    .tipsTwo{
      position: fixed;
      left: 14vw;
      bottom: 21.5vw;
      width: 72vw;
      line-height: 5.5vw;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 4vw;
      color: #FFFFFF;
      z-index: 501;
    }

    .qrcodeOne{
      position: fixed;
      width: 27.2vw;
      height: 27.2vw;
      left: 36.4vw;
      bottom: 45vw;
    }

    .qrcodeTen{
      position: fixed;
      width: 18.9vw;
      height: 18.9vw;
      left: 51.7vw;
      bottom: 49vw;
    }

    .canImg{
      position: fixed;
      top: 0vw;
      left: 0;
      z-index: 500;
      height: 100vh;
      width: 100vw;
    }
</style>

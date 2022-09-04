<template>
    <div>
        <div class="app">
            <span class="imgBox" @click="toDownload">
                <img :src="weixin">
                <span class="text">分享到微信</span>
            </span>
            <span class="imgBox" @click="toDownload">
                <img :src="moment">
                <span class="text">分享到朋友圈</span>
            </span>
            <span class="imgBox" @click="toDownload">
                <img :src="qq">
                <span class="text">分享到QQ</span>
            </span>
            <span class="imgBox" @click="toDownload">
                <img :src="qzone">
                <span class="text">分享到QQ空间</span>
            </span>
            <span class="imgBox" @click="toDownload">
                <img :src="download">
                <span class="text">下载图片</span>
            </span>
            <span class="imgBox" @click="toChannel">
                <img :src="fanbook">
                <span class="text">分享到频道</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { backImg, size } from '@/api/share'
import { ref, toRefs } from 'vue'
import weixin from '../assets/weixin.png'
import qq from '../assets/qq.png'
import qzone from '../assets/qzone.png'
import moment from '../assets/moment.png'
import fanbook from '../assets/fanbook.png'
import download from '../assets/download.png'

/**
 * 接受从抽卡页面传来的参数
 */
const props = defineProps({
  reward: Object,
  num: String
})
/**
 * 消息卡片显示的奖励名字
 */
const name = ref('')
const reward = ref([])
if (props.num === 1) {
  name.value = toRefs(props.reward.name)
} else if (props.num === 10) {
  reward.value = props.reward.filter((item) => {
    return item.imgUrl
  })
  name.value = reward.value[0].name
}
/**
 * 消息卡片显示的背景图片
 */
const imgUrl = ref('')
const getBack = async () => {
  try {
    const res = await backImg()
    if (res.success) {
      imgUrl.value = '1::00::0::' + btoa(res.data)
      console.log(imgUrl.value)
    }
  } catch (error) {
  }
}
getBack()

/**
 * 消息卡片显示的背景图片高度
 */
const imgHeight = ref(null)
const getSize = async () => {
  try {
    const res = await size()
    if (res.success) {
      if (res.data === 'MID') {
        imgHeight.value = 140
      } else if (res.data === 'BIG') {
        imgHeight.value = 170
      } else if (res.data === 'SMALL') {
        imgHeight.value = 110
      }
    }
  } catch (error) {
  }
}
getSize()
/**
 * 路由跳转
 */
const router = useRouter()
/**
 * 跳转到分享页面
 */
const toDownload = () => {
  router.push({
    path: '/share',
    query: {
      reward: JSON.stringify(props.reward),
      num: props.num
    }
  })
}
/**
 * 分享到频道
 */
const toChannel = () => {
  window.fb.init({
    success: () => {
      window.fb.sendMessage({
        type: 'messageCard',
        fit: 'scaleDown',
        data: JSON.stringify({
          tag: 'column',
          crossAxisAlignment: 'start',
          children: [{
            tag: 'row',
            padding: '5',
            children: [{
              tag: 'markdown',
              data: `我抽中${name.value}`,
              style: {
                color: '#000000',
                fontSize: 15
              }
            }]
          },
          {
            tag: 'row',
            children: [{
              tag: 'container',
              padding: '5',
              child: {
                tag: 'image',
                src: imgUrl.value,
                height: imgHeight.value,
                width: 250,
                radius: 10,
                fit: 'fitHeight',
                alignment: '0.5'
              }
            }]
          },
          {
            tag: 'container',
            width: 250,
            margin: '5',
            child: {
              tag: 'button',
              type: 'outlined',
              size: 'big',
              child: {
                tag: 'text',
                data: '我也要抽'
              }
            }
          }]
        })
      })
    }
  })
}
</script>

<style scoped>
  .app{
    display: flex;
    margin-bottom: 2.1vw;
  }

  .imgBox{
    margin-left: 2vw;
    margin-top: 4vw;
    justify-content: center;
    text-align: center;
  }

  img{
    display: block;
    height: 12vw;
    width: 12vw;
    margin: 0 auto 0.7vw;
  }

  .text{
    height: 3.6vw;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 2.7vw;
    line-height: 3.6vw;
    color: #000000;
  }

</style>

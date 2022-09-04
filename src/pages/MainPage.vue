<template>
    <!-- 导航栏 -->
    <div class="nav">
      <button @click="toRewards">奖励一览</button>
      <div></div>
      <button @click="toUser">个人中心</button>
    </div>
    <!-- 抽卡部分 -->
    <div class="gachaBox">
      <!-- 卡片显示 -->
      <div class="cards">
        <div class="card">
          <div></div>
        </div>
        <div class="card">
          <div></div>
        </div>
        <div class="card">
          <div></div>
        </div>
      </div>
      <!-- 剩余次数 -->
      <div class="numLeft">剩余{{chances}}次</div>
      <!-- 按钮 -->
      <div class="btnBox">
          <button class="draw"  @click="toOne">
          抽卡一次
          </button>
          <button class="draw" @click="toTen">
          抽卡十次
          </button>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="line">
      <div></div>
    </div>
    <!-- 任务中心 -->
    <div class="tasks">
      <div class="title">任务中心</div>
      <div class="taskBack">
        <div class="taskBox">
          <text class="taskName" decode="true">①&ensp;登录抽卡页</text>
          <text class="add">次数+3</text>
          <button class="goFinish" @click="task1?'':goLogin()" :style="{'background':task1?'none':'','color':task1?'#999999':'','border-style':task1?'none':'','box-shadow':task1?'none':''}">{{task1?'已完成':'去完成'}}</button>
        </div>
        <div class="taskBox">
          <text class="taskName" decode="true">②&ensp;分享抽卡结果到频道</text>
          <text class="add">次数+2</text>
          <button class="goFinish" @click="task4?'':toOne()" :style="{'background':task4?'none':'','color':task4?'#999999':'','border-style':task4?'none':'','box-shadow':task4?'none':''}">{{task4?'已完成':'去完成'}}</button>
        </div>
        <div class="taskBox">
          <text class="taskName" decode="true">③&ensp;发帖一次</text>
          <text class="add">次数+1</text>
          <button class="goFinish" :style="{'background':task3?'none':'','color':task3?'#999999':'','border-style':task3?'none':'','box-shadow':task3?'none':''}">{{task3?'已完成':'去完成'}}</button>
        </div>
        <div class="taskBox">
          <text class="taskName" decode="true">④&ensp;发言三次</text>
          <text class="add">次数+1</text>
          <button class="goFinish" :style="{'background':task2?'none':'','color':task2?'#999999':'','border-style':task2?'none':'','box-shadow':task2?'none':''}">{{task2?'已完成':'去完成'}}</button>
        </div>
        <div class="taskBox">
          <text class="taskName" decode="true">⑤&ensp;积分兑换次数</text>
          <text class="add" decode="true">5积分/次&ensp;&ensp;&ensp;&ensp;剩余积分:{{credits}}</text>
          <button class="goFinish" @click="buy">兑换</button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { chance, credit, buyChance, task, loginTask } from '@/api/mainPage'
import { authorize } from '@/api/user'
import { Toast } from 'vant'
import 'vant/es/toast/style'

// 路由跳转
const router = useRouter()
// 跳转至抽卡一次
const toOne = () => {
  if (window.localStorage.getItem('uuid')) {
    if (chances.value >= 1) {
      router.push({
        path: '/gachaOne'
      })
    } else {
      Toast('抽卡次数不足')
    }
  } else {
    Toast('您尚未登录')
  }
}
// 跳转至抽卡十次
const toTen = () => {
  if (window.localStorage.getItem('uuid')) {
    if (chances.value >= 10) {
      router.push({
        path: '/gachaTen'
      })
    } else {
      Toast('抽卡次数不足')
    }
  } else {
    Toast('您尚未登录')
  }
}
// 跳转至奖励一览
const toRewards = () => {
  if (window.localStorage.getItem('uuid')) {
    router.push({
      path: '/rewards'
    })
  } else {
    Toast('您尚未登录')
  }
}
// 跳转至奖励一览
const toUser = () => {
  if (window.localStorage.getItem('uuid')) {
    router.push({
      path: '/user'
    })
  } else {
    Toast('您尚未登录')
  }
}

/**
 * 判断是否登录
 */
const getId = async () => {
  try {
    const id = await window.localStorage.getItem('uuid')
    if (!id) {
      authorize()
    }
  } catch (error) {
  }
}
getId()

/**
 * 剩余的抽奖次数与积分
 */
const chances = ref(0)
const credits = ref(0)
/**
 * 获取剩余抽卡次数
 */
const getChance = async () => {
  try {
    const res = await chance()
    if (res.success) {
      chances.value = res.data
    }
  } catch (error) {
  }
}
getChance()
/**
 * 获取积分
 */
const getCredit = async () => {
  try {
    const res = await credit()
    if (res.success) {
      credits.value = res.data
    }
  } catch (error) {
  }
}
getCredit()
/**
 * 用积分兑换次数
 */
const buy = async () => {
  try {
    const res = await buyChance()
    if (res.success) {
      getCredit()
      getChance()
      Toast('兑换成功')
    } else {
      if (res.code === 4001) {
        Toast('请重新登录')
        setTimeout(function () {
          authorize()
        }, 1000)
      } else if (res.code === 5000) {
        Toast('遇到了未知的错误')
      }
    }
  } catch (error) {
  }
}
/**
 * 获取任务列表完成情况
 */
const getTask = async () => {
  try {
    const res = await task()
    if (res.success) {
      task1.value = res.data[0].finished
      task2.value = res.data[1].finished
      task3.value = res.data[2].finished
      task4.value = res.data[3].finished
    }
  } catch (error) {
  }
}
getTask()
/**
 * 任务完成的参数
 */
const task1 = ref(false)
const task2 = ref(false)
const task3 = ref(false)
const task4 = ref(false)
// 完成第一个任务
const goLogin = async () => {
  try {
    const res = await loginTask()
    if (res.success) {
      task1.value = true
    } else if (res.code === 4001) {
      Toast('请重新登录')
      setTimeout(function () {
        authorize()
      }, 1000)
    } else if (res.code === 5000) {
      Toast('遇到了未知的错误')
    }
  } catch (error) {
  }
}

</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }

  .nav{
    height: 10.7vw;
    width: fill;
  }

  .nav button {
    width: 21.3vw;
    height: 7vw;
    font-size: 3.2vw;
    margin: 3.1vw 2.7vw;
    background: radial-gradient(88.1% 60.38% at 50.36% 23.58%, #D0A756 0%, rgba(149, 108, 60, 0.88) 100%);
    box-shadow: 0 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    border: 1px solid #502017;
    border-radius: 2.1vw;
  }

  .nav div {
    display: inline-block;
    width: 46.6vw;
  }

  .gachaBox{
    width: fill;
    height: 63.1vw;
    margin-top: 1.3vw;
  }

  .cards{
    margin: 2.7vw 5vw;
  }

  .card{
    display: inline-block;
    width: 24vw;
    height: 39vw;
    margin: 1.3vw 3vw;
    padding: 0;
    background: #441313;
  }

  .card div {
    margin: 1vw;
    width: 22vw;
    height: 37vw;
    background-image: url("./../assets/card-back.png");
    background-repeat:no-repeat;
    background-size:100%;
  }

  .numLeft{
    width: fill;
    height: 5.3vw;
    margin: 1.3vw 0;
    font-size: 3.2vw;
    font-weight: bold;
    color: #502017;
    font-family: PingFang SC;
    text-align: center;
    line-height: 3vh;
  }

  .btnBox{
    height: 8vw;
    width: fill;
    margin-bottom: 8vw;
  }

  .btnBox button:first-child{
    height: 6.7vw;
    margin-left: 27.3vw;
    margin-right: 2.7vw;
    border-radius: 10vw;
  }

  .btnBox button:last-child{
    height: 6.7vw;
    margin-right: 27.3vw;
    border-radius: 10vw;
  }

  .draw{
    width: 21.3vw;
    height: 8.5vw;
    font-size: 3.2vw;
    border-radius: 1.3vw;
  }

  .line{
    width:fill;
    height: 1.3vw;
    margin-top: 1.3vw;
  }

  .line > div {
    width: 85vw;
    height: 0.2vw;
    margin-left: 7.5vw;
    background-color: #502017;
  }

  .tasks{
    width: fill;
  }

  .title{
    width: fill;
    height: 8.7vw;
    flex-direction: row;
    text-align: center;
    font-size: 5.3vw;
    font-weight: 400;
    line-height: 8.7vw;
    color: #401818;
    margin: 1.3vw 0;
    font-family: 'STZhongsong' !important;
  }

  .title+div{
    width: 80vw;
    margin: 0 auto;
  }

  .taskBox{
    position: relative;
    height: 13.3vw;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 1.33vw;
    justify-items: center;
  }

  .taskBack{
    height: 77.3vw;
    background-image: url("./../assets/task-back.png");
    background-repeat:no-repeat;
    background-size: 100% 100%;
    padding-top: 2.7vw;
  }

  .taskBox:last-of-type{
    border:none;
  }

  text{
    font-family: 'Noto Sans';
    font-style: normal;
    font-size: 2.6vw;
    color: #999999;
    padding-left: 1.3vw;
    font-weight: 500;
  }

  .taskName{
    position: absolute;
    left: 2.7vw;
    top: 1.5vw;
    color: #666666;
    font-size: 4vw;
  }

  .add{
    position: absolute;
    left: 8vw;
    top: 8.3vw;
  }

  .taskBox button{
    float: right;
    width: 18.7vw;
    height: 8vw;
    font-family: 'STZhongsong';
    font-size: 3.2vw;
    margin-top: 2.7vw;
    margin-right: 3vw;
    border: 1px solid #84592F;
  }

  button{
    color: #502017;
    font-weight: 400;
    background: radial-gradient(69.21% 65.09% at 50% 23.58%, #EDDD8C 0%, #C0A060 100%);
    box-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    border: 1px solid #84592F;
    background-size: cover;
    border-radius: 10vw;
    font-family: 'STZhongsong';
  }

  .popup{
    font-size: 10vw;
  }
</style>

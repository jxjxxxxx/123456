<template>
  <div class="card-container">
    <van-list class="card-list" v-model:loading="listLoading" v-model:error="listError" :finished="listFinished" finished-text="没有更多了" error-text="请求失败，点击重新加载" @load="listLoad" >
      <FlopItem v-for="item in flops" :key="item.createTime" :name="item.prizeName" :date="item.createTime" :code="item.code" :status="item.status" :img="item.imgUrl" :description="item.description" :type="item.type" />
    </van-list>
    <TabBar :type="0" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'
import 'vant/es/toast/index.css'
import 'vant/es/popup/index.css'
import 'vant/es/loading/index.css'
import { getDrawRecordList } from '@/api/draw.js'
import { authorize } from '@/api/user'

/**
 * @typedef Flop {object}
 * @property id {number} 翻牌记录ID
 * @property prizeName {string} 牌的名称
 * @property createTime {Date} 翻牌时间
 * @property code {string} 翻牌code
 * @property imgUrl {string} 翻牌奖励图片
 * @property status {boolean} 奖励是否已发货
 * @property description {string} 翻牌奖励描述
 * @property type {string} 翻牌奖励类型
 */

/**
 * 翻牌记录数据
 * @type {Ref<Flop[]>}
 */
const flops = ref([])

/**
 * 当前翻牌记录页分页下标
 */
let current = 1
/**
 * 当前翻牌记录页分页容量
 */
const size = 10

const listLoading = ref(false)
const listError = ref(false)
const listFinished = ref(false)

const listLoad = async () => {
  try {
    ++current
    const res = await getDrawRecordList(current, size)
    if (res.success) {
      if (res.data.records.length < size) listFinished.value = true
      setTimeout(() => Toast.clear(), 250)
      const records = res.data.records.map(v => {
        v.createTime = new Date(v.createTime)
        v.status = v.status !== 'UNSENT'
        return v
      })
      flops.value = [...flops.value, ...records]
    } else {
      Toast.fail('网络异常')
    }
  } catch (error) {
    console.error(error)
    --current
    listError.value = true
    Toast.fail('网络异常')
  } finally {
    listLoading.value = false
  }
}

const init = async () => {
  Toast.loading({
    message: '加载中',
    duration: 0,
    className: 'toast',
    forbidClick: true
  })
  try {
    const res = await getDrawRecordList(current, size)
    if (res.success) {
      setTimeout(() => Toast.clear(), 250)
      flops.value = res.data.records.map(v => {
        v.createTime = new Date(v.createTime)
        v.status = v.status !== 'UNSENT'
        return v
      })
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
    listError.value = true
    Toast.fail('网络异常')
  }
}

init()
</script>

<style scoped lang="less">
.card-container {
  width: 100%;
  height: calc(100% - var(--van-tabbar-height));

  margin: 0;
  padding: 0;

  overflow: scroll;

  .card-list {
    width: 100%;
    height: calc(100% - 7.7vw);

    overflow: scroll;
  }
}
</style>

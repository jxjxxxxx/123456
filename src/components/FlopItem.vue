<template>
  <div class="flop-item">
    <div class="flop-img">
      <van-image width="75" height="75" radius="10" fit="cover" lazy-load :src="props.img"/>
    </div>
    <div class="flop-info">
      <div class="flop-title">{{ props.name }}</div>
      <div class="flop-desc" @click="copyText">{{ desc }}</div>
      <div class="flop-date_status">2022/3/2 {{ props.status ? '已发货' : '未发货'}}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import copy from 'copy-to-clipboard'
import moment from 'moment'
moment.locale('zh-cn')

const props = defineProps({
  name: {
    type: String,
    default: '未知'
  },
  date: {
    type: Date,
    default: new Date()
  },
  code: {
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  img: {
    type: String,
    default: './src/assets/reward-default.png'
  },
  description: {
    type: String
  },
  type: {
    type: String,
    required: true
  }
})

const desc = ref(props.type === 'OBJECT' ? props.description : '')

/**
 * 点击复制 code 方法
 */
const copyText = () => {
  copy(String(props.code), {
    format: 'text/plain'
  })
}
</script>

<style scoped lang="less">
.flop-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0;
  padding: 0.7vw 1.3vw;

  width: 100%;
  height: 13.3vw;

  > div {
    height: 100%;
  }

  .flop-img {
    width: 11.3vw;
    padding: 1vw 0.7vw;
  }

  .flop-info {
    width: calc(100% - 11.3vw);
    padding: 1vw 0.7vw;

    .flop-title {
      font-size: 2.4vw;
      color: #656565;
      text-align: left;
      letter-spacing: 1px;
      font-weight: 500;
      line-height: 1.5em;
      height: 1.5em;
    }

    .flop-desc {
      height: 1.5em;
      overflow: hidden;
      font-size: 2.1vw;
      text-align: left;
      text-overflow: ellipsis;
      word-break: break-all;
      overflow-wrap: break-word;
      line-height: 1.5em;
      color: #989898;
    }

    .flop-date_status {
      height: 1.5em;
      color: #A4A4A4;
      font-size: 1.9vw;
      text-align: left;
      line-height: 1.5em;
    }
  }
}
</style>

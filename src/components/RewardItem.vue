<template>
  <div class="reward-item">
    <div class="reward-img">
      <van-image width="75" height="75" radius="10" fit="cover" lazy-load :src="props.img"/>
    </div>
    <div class="reward-info">
      <div class="reward-title">{{ props.title }}</div>
      <div class="reward-content">{{ props.content }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '暂无'
  },
  content: {
    type: String,
    default: '暂无'
  },
  img: {
    type: String,
    default: './src/assets/reward-default.png'
  }
})
</script>

<style scoped lang="less">
.reward-item {
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

  .reward-img {
    width: 11.3vw;
    padding: 1vw 0.7vw;
  }

  .reward-info {
    width: calc(100% - 11.3vw);
    padding: 1vw 0.7vw;

    .reward-title {
      font-size: 2.7vw;
      color: #656565;
      text-align: left;
      letter-spacing: 1px;
      font-weight: 500;
      line-height: 1.5em;
      height: 1.5em;
    }

    .reward-content {
      font-size: 2.1vw;
      text-align: left;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      overflow-wrap: break-word;
      line-height: 1.25em;
      color: #A4A4A4;
      height: 2.5em;
    }
  }
}
</style>

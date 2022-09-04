<template>
  <div class="tab-bar">
    <div v-if="type === 1" class="return-button" @click="save">
      <span>保存</span>
    </div>
    <router-link class="return-button" to>
      <span @click="$router.back(-1)">关闭</span>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['post'])

const save = () => {
  emit('post')
}
</script>

<style scoped lang="less">
.tab-bar {
  width: 100%;
  height: 6.7vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .return-button {
    background: radial-gradient(69.21% 65.09% at 50% 23.58%, #EDDD8C 0%, #C0A060 100%);
    border: 1px solid #84592F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4vw;

    display: block;

    width: 22.8vw;
    height: 8vw;

    font-size: 3.9vw;
    letter-spacing: 2px;
    color: rgb(80, 34, 24);
    text-align: center;
    line-height: 8vw;
  }
}
</style>

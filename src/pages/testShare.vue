<template>
  <div>
    <button @click='f'></button>
    <img :src='url'>
  </div>
</template>

<script setup>
const url = 'https://draw-game.oss-cn-chengdu.aliyuncs.com/share-background/98e6890a3ff542ac8a182e67e71881f3.jpg'
const a = '1::00::0::' + btoa(url)
const b = '皮肤'
const f = async () => {
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
              data: `我抽中${b}`,
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
                src: a,
                height: 110,
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
    button{
      height: 50px;
      width: 50px;
    }

    img{
      height: 50px;
      width: 50px;
    }
</style>

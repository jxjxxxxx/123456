import { createApp } from 'vue'
import { Lazyload, ShareSheet, Toast } from 'vant'
import VConsole from 'vconsole'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router/index'
import isMobile from '@/utils/isMobile'

createApp(App).use(router).use(Toast).use(ShareSheet).use(Lazyload).use({ lazyComponent: true }).mount('#app')

if (isMobile()) {
  const vConsole = new VConsole()
  window.addEventListener('close', () => {
    vConsole.destroy()
  })
}

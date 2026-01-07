
import {createApp} from 'vue'

import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

// ATTENTION 使用PINIA

// 第一步：创建Pinia （创建前使用 npm i pinia下载）
const pinia = createPinia();

// 第二步：安装Pinia
app.use(pinia)

app.use(router)

app.mount("#app")
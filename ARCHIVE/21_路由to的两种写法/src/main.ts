//1. 引入createApp方法用于创建应用
import {createApp} from 'vue'
//2. 引入根组件App.vue
import App from './App.vue'

// 18_路由器创建
// 第四步：引入路由器
import router from './router'

//3. 创建应用实例
const app = createApp(App)


// 第五步：使用路由器, 此时app具备路由环境
app.use(router)

//4. 将app实例挂载到index.html中的#app元素上
app.mount("#app")
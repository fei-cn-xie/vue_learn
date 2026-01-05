//1. 引入createApp方法用于创建应用
import {createApp} from 'vue'
//2. 引入根组件App.vue
import App from './App.vue'

//3. 创建应用实例
const app = createApp(App)

//4. 将app实例挂载到index.html中的#app元素上
app.mount("#app")
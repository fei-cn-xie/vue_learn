import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()

// 安装插件
app.use(pinia)

// ATTENTION 一：注册全局组件
app.component('hello',Hello)

// ATTENTION 二：配置全局参数
app.config.globalProperties.x = 900;
app.config.globalProperties.y = 800;

// ATTENTION 对全局参数进行声明，不用ts会报语法错误，不声明也可以正常运行
declare module 'vue' {
    interface ComponentCustomProperties{
        x: number,
        y: number
    }
}


// ATTENTION 三：注册全局指令
app.directive('beauty', 
    /**
     * 
     * @param element 元素
     * @param param1 配置对象的元素
     */
    (element, {value})=>{
        element.innerText += value;
        element.style.color = 'green';
        element.style.backgroundColor = 'yellow'
})


// ATTENTION 四：安装插件
//app.use(router);
app.use(pinia);

// 挂载应用
app.mount('#app')
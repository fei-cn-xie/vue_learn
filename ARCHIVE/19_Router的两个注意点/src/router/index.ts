//START 创建一个路由器，并暴露出去

//第一步：引入路由的createRouter
import AboutView from "@/pages/AboutView.vue";
import HomeView from "@/pages/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

/**
 * 两个注意点***：
 * 1. 路由组件通常放在pages或views的文件夹中，一般组件存放在components文件夹中
 * 2. 点击导航，视觉上消失的组件，默认是被unmounted的，需要时才会重新挂载
 */

// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(), // 创建路由器一定要指定路由器的工作模式
    routes: [ // 一个一个的路由规则
        {
            path: "/home",
            component: import("@/pages/HomeView.vue") 
        },
        {
            path: '/news',
            component: import("@/pages/NewsView.vue"),
        },
        {
            path: '/about',
            component: AboutView
        }
    ]
})


// 第三步：暴露路由器

export default router

// 第四步第五步：查看@/main.ts对router的引用
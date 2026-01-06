// 创建一个路由器，并暴露出去

//第一步：引入路由的createRouter
import AboutView from "@/components/AboutView.vue";
import HomeView from "@/components/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";


// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(), // 创建路由器一定要指定路由器的工作模式
    routes: [ // 一个一个的路由规则
        {
            path: "/home",
            component: import("@/components/HomeView.vue")
        },
        {
            path: '/news',
            component: import("@/components/NewsView.vue"),
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
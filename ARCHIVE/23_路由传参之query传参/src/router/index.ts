// 创建一个路由器，并暴露出去

//第一步：引入路由的createRouter
import AboutView from "@/pages/AboutView.vue";
import HomeView from "@/pages/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

/**
 * 两个注意点***：
 * 1. 路由组件通常放在pages或views的文件夹中，一般组件存放在components文件夹中
 * 2. 点击导航，视觉上消失的组件，默认是被unmounted的，需要时才会重新挂载
 */

// 第二步：创建路由器 TODO
const router = createRouter({
    // 路由器的两种工作模式
    /**
     * 1. history模式：
     *        使用方式：history: createWebHistory()
     *        优点：URL更加美观,不带有#, 更接近传统网站URL
     *        缺点: 后期项目上线,需要服务端配合处理路径问题,否则刷新会有404错误
     * 
     * 2. hash模式
     *        使用方式: history: createWebHashHistory()
     *        优点: 兼容性更好,因为不需要服务器处理路径
     *        缺点: URL带有#不太美观, 且在SEO优化方面相对较差 (SEO搜索引擎优化)
     */
    history: createWebHistory(), // 创建路由器一定要指定路由器的工作模式
    routes: [ // 一个一个的路由规则
        {
            name: "zhuye", 
            path: "/home",
            component: import("@/pages/HomeView.vue") 
        },
        {
            name: 'xinwen',
            path: '/news',
            component: import("@/pages/NewsView.vue"),
            children: [
                {
                    path: 'detail',
                    component: import("@/pages/Detail.vue")
                }
            ]
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
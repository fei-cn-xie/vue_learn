<template>
    <div class="app">

        <!-- 1.1 导航区 -->
         <h2 class="title">路由测试</h2>
         <div class="navigate"> 

            <!-- ATTENTION 使用replace无记录 -->
            <RouterLink  to="/home" active-class="focus-content">Home</RouterLink>
            <!-- 第一种 -->
            <RouterLink replace :to="{name: 'xinwen'}" active-class="focus-content">News</RouterLink>
            <!-- -->
            <!-- 路由to的两种写法 -->
            <RouterLink replace :to="{path:'/about'}" active-class="focus-content">About</RouterLink>
            
         </div>

         <!-- 1.2 展示区 -->
        <div class="main-content">
            <RouterView/>
        </div>

    </div>
    

    
</template>

<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router';
/**
 * 1. 导航区，展示区
 * 2. 请来路由器
 * 3. 指定路由规则
 * 4. 编写.vue组件
 */


</script>

<style scoped>
/* 3. 样式美化 */
.app {
    margin-top: 0%;
    vertical-align: top;
    background-color: #cd2cf5;
    box-shadow: 58 58 500px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 200px;
}

.title {
    margin-top: 0%;
    text-align: center;
}

.navigate {

    margin-top: 0%;
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
    height: 60px;
}

.navigate a{
    height:30px;
    width: 60px;
    background-color:yellowgreen;
    text-align: center;
    vertical-align: middle;
}

.main-content {
    background-color: skyblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 110px;
}

.navigate a.focus-content{
    height: 40px;
    width: 90px;
    background-color:rgb(6, 237, 229);
    text-align: center;
    vertical-align: middle;
}

</style>
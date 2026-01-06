<template>

   <div class="news">
    <ul>
        <li v-for="news in NewsList" :key="news.id">
            <!-- ATTENTION params传参 路由中需要先定义才能用 -->
             <!-- 第一种写法 -->
            <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`" >{{ news.title }}</RouterLink> -->
             <!-- 第二种写法 -->
            <RouterLink :to="{
                name: 'news-detail', // ATTENTION 这里必须使用路由的name，path无效
                params: {
                    id: news.id,
                    title: news.title,
                    content: news.content
                }
            }"> {{ news.title }}</RouterLink>
            
        </li>
    </ul>
    <div class="news-content">
        <RouterView></RouterView>
    </div>
   </div>

</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const NewsList = reactive([
    {
        id: '001',
        title: "正经新闻",
        content: "今天是国庆节"
    },
    {
        id: '002',
        title: '歪经新闻',
        content: "今天不是国庆节"
    },
    {
        id: '003',
        title: '不是新闻',
        content: "晚上十二点半睡觉"
    }
])

</script>

<style scoped>

.news {
    background-color: rgb(222, 230, 233);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 90px;
}

.news-content active{
    background-color: rgb(136, 12, 244);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 70px;
}

</style>
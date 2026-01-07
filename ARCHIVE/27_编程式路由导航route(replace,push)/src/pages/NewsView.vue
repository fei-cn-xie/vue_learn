<template>

   <div class="news">
    <ul>
        <li v-for="news in NewsList" :key="news.id">
            <button @click="directNews(news)" >查看新闻</button>{{ news.title }}
            
        </li>
    </ul>
    <div class="news-content">
        <RouterView></RouterView>
    </div>
   </div>

</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

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
// ATTENTION
/**
 * 编程式导航使用场景： 
 * 1. 用户点击跳转
 * 2. 定时跳转
 * 3. 登录成功，自动跳转到个人中心
 * 4. 鼠标滑动到某处，自动跳转
 */
function directNews(news:any){
    console.log("查看新闻", news)
    router.replace("/news/" + news.id + "/" + news.title + "/" + news.content);
}

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
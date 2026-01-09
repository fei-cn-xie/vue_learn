<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <!-- 1. 默认插槽 -->
       <!-- 2. 具名插槽 -->
        <!-- 3. 作用域插槽 -->
      <Game :title="games"> 
        <ul>
          <li v-for="value in games.data">{{ value }}</li>
        </ul>
      </Game>
      <Game :title="food" style="width: 200px;"> 
        <img :src="food.data" />
      </Game>
      <Game :title="video">
        <video :src="video.data" style="width: 200px;" controls ></video>
      </Game>
      

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import { reactive } from 'vue';
import Game from './Game.vue'

let games = reactive({
  title: '游戏',
  data: [
  
  'ori',
  'jat',
  'java'
]
})

let food = reactive({
  title: '美食',
  data: 'https://z1.ax1x.com/2023/11/19/piNxLo4.jpg',
})

let video = reactive({
  title: '视频',
  data: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4'
})

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    /* 横向排列 */
    display: flex;
    /* 均匀铺开 */
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>
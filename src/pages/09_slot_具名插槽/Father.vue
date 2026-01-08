<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <!-- 2. 具名插槽 -->
       <!-- ATTENTION 父组件使用<template v-slot:sname></template>  子组件只用<slot name='sname'>默认内容</slot>-->
        <!-- ATTENTION 可以使用简写形式 <template #sname></template> -->
      <Category >
        <template v-slot:s1>
          <h2>{{ games.title }}</h2>
        </template>
        <template v-slot:s2>
          <ul>
            <li v-for="value in games.data">{{ value }}</li>
          </ul>
        </template>
      </Category>
      <Category >
        <template v-slot:s1><h2>{{ food.title }}</h2></template>
        <template v-slot:s2>
          <img :src='food.data'>
        </template>
      </Category>

      <Category>
        <template v-slot:s1>
          <h2>{{ video.title }}</h2>
        </template>

        <template v-slot:s2>
          <video :src="video.data" style="width: 200px;" controls></video>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref, reactive } from 'vue';
import Category from './Category.vue'
import { v } from 'vue-router/dist/router-CWoNjPRp.mjs';


const s1 = ref('s1')
const s2 = ref('s2')

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

img,
video {
  width: 100%;
}


h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}

</style>
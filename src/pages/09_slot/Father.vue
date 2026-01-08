<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <!-- ATTENTION 父组件通过该v-slot='aa'接收数据 -->
        <template #slot2="aa">
          <ul>
            <li v-for="value in aa.gamess.data"> {{ value }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template #="bb">
          <ol>
            <li v-for="value in bb.youxi.data">{{ value }}</li>
          </ol>
        </template>
      </Game>
      <!-- ATTENTION 访问默认插槽 -->
      <Game>
        <template #default="{youxi}">
          <h2 v-for="value in youxi.data">{{ value }}</h2>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref, reactive } from 'vue';
import Game from "./Game.vue"


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
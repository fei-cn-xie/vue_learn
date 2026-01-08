<template>
    <div class="game">
        <h2>{{ games.title }}</h2>
        <!-- ATTENTION 子组件通过slot中 :sname='sonData' 将数据暴露 -->
        <slot :youxi="games"></slot>
        <slot :gamess="games" name="slot2"></slot>
        
    </div>
</template>

<script lang="ts" setup name="Game">
import { reactive, ref } from 'vue';

let games = reactive({
  title: '游戏',
  data: [

    'ori',
    'jat',
    'java'
  ]
})


</script>

<style scoped>

.game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>
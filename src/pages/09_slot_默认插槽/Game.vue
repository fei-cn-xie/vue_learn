<template>
  <div class="game">
    <h2>{{ title.title }}</h2>
    <!-- <slot  x="哈哈" y="你好"></slot> -->
     <!-- <slot>{{ title.data }}</slot> -->
      <!-- ATTENTION 默认插槽 一般情况下放一个就可以了， 否则出现重复内容 -->
      <slot></slot> 
      
  </div>
</template>

<script setup lang="ts" name="Game">

defineProps(['title'])

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

  img {
    width: 200px;
  }
</style>
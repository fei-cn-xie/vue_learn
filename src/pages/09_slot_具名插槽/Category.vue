<template>
  <div class="game">
    
    <div class="content">
      <slot name='s1'> 默认头</slot>
      <slot name='s2'>默认体</slot>
    </div>


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



img {
  width: 200px;
}


</style>
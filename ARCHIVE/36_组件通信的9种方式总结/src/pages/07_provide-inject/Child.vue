<template>
  <div class="child">
    <h3>我是子组件 {{ money }}</h3>
    <h4>MyFace : {{ erziFace }}</h4>
    <GrandChild/>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { inject, provide, ref } from 'vue';
import GrandChild from './GrandChild.vue'

  let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(param:number)=>{}})
  let erziFace = ref("big face");

  provide("face",erziFace)

</script>

<style scoped>
  .child {
    margin-top: 20px;
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>
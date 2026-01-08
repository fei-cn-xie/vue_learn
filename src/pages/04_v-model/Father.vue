<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!--1 v-model用在html标签上 -->
    <!-- 方式一： <input type="text" v-model="username"> 两种方式等价 -->
    <!-- 方式二：<input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!--2 v-model用在组件标签上 -->
     <!-- <AtguiguInput v-model="username"/> -->
    <!--底层写法： <AtguiguInput 
      :modelValue="username" 
      @update:modelValue="username = $event"
    /> -->

    <!-- 3 修改modelValue -->
    <AtguiguInput v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
  // 数据
  let username = ref('zs123')
  let password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>

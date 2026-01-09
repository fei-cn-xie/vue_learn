<template>

  <!-- 2 v-model 用在组件标签上 --> 
   <!-- <input 
   type="text"
   :value="modelValue"
   @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
   /> -->
   <!-- $event到底是什么？啥时候能$event.target -->
    <!-- 1. 对于原生事件，$event就是事件对象 ==> 能`.target`-->
    <!-- 2. 对于自定义事件, $event就是触发事件时，所传递的数据不能`.target` -->



   <!-- 3 v-model 修改modelValue  -->
  <input 
    type="text" 
    :value="ming"
    @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"
  >
  <br>
  <input 
    type="text" 
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="AtguiguInput">

  // 2 v-model用在组件标签上
  // defineProps(['modelValue'])
  // const emit = defineEmits(['update:modelValue'])

  // 3 
  defineProps(['ming','mima'])
  const emit = defineEmits(['update:ming','update:mima']) // 'update:xxx', 'update:xxx'
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>
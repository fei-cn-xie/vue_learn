<template>
  <div class="father">
    <h3>父组件</h3>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- ATTENTION 给子组件Child绑定事件 @send-toy事件 -->
		 <!-- ATTENTION @send-toy事件定义在子组件中 -->
    <Child @send-toy="saveToy" /> 
	<!-- ATTENTION 事件命名通过'-'分割单词 -->
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
	import { ref } from "vue";
	// 数据
	let toy = ref('')



	// ATTENTION　子组件emit可以通过任何方式触发本方法
	// 用于保存传递过来的玩具
	function saveToy(value:string){
		console.log('saveToy',value)
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>
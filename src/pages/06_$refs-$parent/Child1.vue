<template>
  <div class="child1">
    <h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>书籍：{{ book }} 本</h4>

		<!-- ATTENTION 子组件访问父组件对象, 需要父组件暴露对应的数据 -->
		<button @click="minusHouse($parent)">干掉父亲的一套房产</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
	import { ref } from "vue";
	// 数据
	let toy = ref('奥特曼')
	let book = ref(3)

	const parentObj = ref();

	

	// 方法 
	function minusHouse(parent:any){
		console.log("Parent", parent);
		parentObj.value = parent;
		console.log("pObj", parentObj.value)
		parent.house -= 1
	}

	// 把数据交给外部 //ATTENTION 暴露数据
	defineExpose({toy,book})

</script>

<style scoped>
	.child1{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>

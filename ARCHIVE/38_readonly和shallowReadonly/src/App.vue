<template>
	<div class="app">
		<h2>当前求和Sum1为： {{ sum }}</h2>
		<h2>当前求和Sum2为： {{ sum2 }}</h2>
		<h2>Car: {{ car }}</h2>
		<h2>Car2: {{ car2 }}</h2>

		<button @click="changeSum" > Add One</button>
		<button @click="changeSum2" > Add One for Sum2</button>
		<button @click="changeCar">Change Car</button>
		<button @click="changeCar2">Change Car2</button>
		
	</div>

</template>

<script lang="ts" setup>
import { ref, readonly, reactive, shallowReadonly } from 'vue';

let sum = ref(0);

let sum2 = readonly(sum);

let car = reactive({
	brand: 'Tesla',
	options: {
		ai: 'grok',
		engine: 'v9'
	}
})

let car2 = shallowReadonly(car);


function changeSum(){
	sum.value += 1;
}
function changeSum2(){
	sum2.value += 1;
}

function changeCar(){
	car.brand = "HUAWEI"
	car.options.ai = 'gmini'
}

function changeCar2(){
	car2.brand = 'XIAO MI',
	car2.options.ai = 'deepseek'
}





</script>


<style scoped>
.app {
	background-color: skyblue;
	border-radius: 10pz;
	box-shadow: 0 0 10px;
	padding: 10;
}
</style>
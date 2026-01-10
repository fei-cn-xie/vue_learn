<template>
	<div class="app">
		<h2> Person : {{ person }}</h2>
		<h2> house : {{  house }}</h2>
		<h2> house2 : {{  house2 }}</h2>
		<h2> house3 : {{  house3 }}</h2>
		<h2> house4 : {{  house4 }}</h2>
		<button @click="changHouse">Change house</button>
		<button @click="changeHouse2">Change house2</button>
		<button @click="changeHouse3">Change house3</button>
		<button @click="changeHouse4">Change house4</button>
	</div>

</template>

<script lang="ts" setup>
import { markRaw, reactive, ref, toRaw, toRef, toRefs } from 'vue';

let person = reactive({
	name: "tom",
	age: 18
})

let car = ref({
	barnd:  'Tesla',
	engine: 'v8'
})


console.log("person", person)
console.log("toRaw(person)", toRaw(person))
console.log("car", car)
console.log("car.value", car.value)
console.log("toRaw(car.value)", toRaw(car.value)) // ATTENTION toRaw之后返回的数据不再是响应式的

let house = {
	size: 340,
	price: 130
}
markRaw(house); // ATTENTION 标记原始对象为RAW, 不能将house转为响应式对象了

let house2 = reactive({
	size: 323,
	price: 230
});


let house3 = toRef(house)


function changeHouse3(){
	console.log(house3)
	house3.value.price += 232323
}

let house4 = toRaw(house2) // ATTENTION toRaw之后返回的数据不再是响应式的, house2本身也不再是响应式的

function changeHouse4(){
	house4.price += 203;
}

</script>



<style scoped>
.app {
	background-color: skyblue;
	border-radius: 10pz;
	box-shadow: 0 0 10px;
	padding: 10;
	height: 400px;
	width: 800px;
	text-align: center;
	align-content: center;
}
</style>
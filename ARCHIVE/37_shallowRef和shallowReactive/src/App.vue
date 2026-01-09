<template>
	<div class="app">
		<h2> The sum is : {{ sum }}</h2>
		<h2> Name : {{ person.name }}</h2>
		<h2> Age : {{ person.age }}</h2>
		<h2> Car : {{ car }}</h2>
		<button @click="changeSum"> sum + 1</button>
		<button @click="changeName('TOMM')"> change name</button>
		<button @click="changeAge(100)"> change age</button>
		<button @click="changePerson({ name: 'mike', age: 234 })">change the person</button>
		<button @click="changeCarType">Change the car type</button>
		<button @click="changeCarWin"> Change the car win </button>
	</div>
</template>

<script lang="ts" setup>
import { shallowRef, shallowReactive } from 'vue';

let sum = shallowRef(0);
let person = shallowRef({
	name: 'jack',
	age: 18
})

let car = shallowReactive({
	type: 'electrical',
	parts: {
		win: 3,
		circle: 3
	}
})

function changeSum() {
	sum.value += 1;
}
function changeName(name: string) {
	person.value.name = name;
}
function changeAge(age: number) {
	person.value.age = age;
}
function changePerson(p: any) {
	person.value = p;
}

function changeCarType(){
	car.type = 'fuel'
}
function changeCarWin(){
	car.parts.win = 24;
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
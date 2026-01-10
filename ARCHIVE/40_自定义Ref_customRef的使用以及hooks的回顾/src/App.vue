<template>
	<div class="app">
		<h1>{{ msg }}</h1>
		<input v-model="msg">
		<h2>{{ message }}</h2>
		<input v-model="message">
		<br/>
		<br/>
		<h1>{{ xioaxi }}</h1>
		<input v-model="xioaxi">
	</div>

</template>

<script lang="ts" setup>
import { customRef, reactive, ref } from 'vue';
import useMessage from './hooks/useMessage';

let timer: number; // 
let initValue = '';

// ATTENTION 定义响应式数据，数据一变化，页面更新可以通过ref实现
let msg = ref("Hello")
// ATTENTION 定义响应式数据，数据一变化，页面等待1秒再更新，无法通过ref实现, 只能通过customRef实现


let message = customRef(

	/**
	 * 
	 * @param track 跟踪: 告诉vue数据msg很重要, vue需要对msg持续关注,一旦msg变化,就去更新 || 监听
	 * @param trigger 触发: 通知vue, msg数据发生了变化 || 通知
	 */
	(track, trigger) => {

		return {
			get() {
				// message被读取时调用
				console.log("Read Value")
				track(); // ATTENTION 读取数据被触发的点
				return initValue.toUpperCase();
			},
			set(value) {
				// message被修改时调用
				clearTimeout(timer); // ATTENTION 根据定时器编号清除, 防止输入一个数据, 1秒后更新,但是在这一秒内有其他数据更改, 发生覆盖
				timer = setTimeout(() => {
					console.log("Change Value")
					initValue = value;
					trigger(); // ATTENTION　写入数据后需要进行触发
				}, 1000);

			}
		}
	});

// ATTENTION  通常情况下, 自定义cutermerRef的内容写在自定义的hook文件中

let xioaxi = useMessage("nihao",1000);




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
<template>
	<div class="child">
		<h3>子组件</h3>

		<h4>$attrs：{{ $attrs }}</h4>

		<GrandChild v-bind="$attrs" />
		<!-- <GrandChild :$attrs/> -->
	</div>
</template>

<script setup lang="ts" name="Child">
import { useAttrs } from 'vue';
import GrandChild from './GrandChild.vue';

console.log("儿子打印v-bind='$attrs'", useAttrs());

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
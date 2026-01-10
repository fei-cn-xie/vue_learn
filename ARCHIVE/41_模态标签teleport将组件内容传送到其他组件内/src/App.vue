<template>
	<div class="outer">
		<h2>I'm App vue</h2>
		<img v-if="doo" src="https://img.keaitupian.cn/uploads/2020/07/20/u1yscpigejt.jpg" />
		<modal/>
		<br/>
		<!-- <button  @click="doo = !doo" > Do</button> -->
		

	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

let doo = ref(true);

</script>

<style scoped>
.outer{
	background-color: #ddd;
	border-radius: 10px;
	padding: 5px;
	box-shadow: 0 0 10px;
	height: 500px;
	justify-content: space-between;
	filter: saturate(100%);
}

img {
	height: 500px;
	/* top: 7px; */
	/* right: 10%; */
	/* position:fixed; */
	
}


</style>
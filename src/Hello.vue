<template>
    <h2>你好！！！！！</h2>
    <img v-for="value in imgs" :src="value">
    <button @click="addImg">Add pic</button>
    
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

let imgs = ref([''])

async function addImgaa(){
    return await axios.get("https://dog.ceo/api/breeds/image/random");
}

function addImg(){
    let res = addImgaa().then((res)=>{
        imgs.value.push(res.data);
    })
}


</script>


<style scoped>

h2 {
    color: red;
}

img{
    height: 200px;
}

</style>
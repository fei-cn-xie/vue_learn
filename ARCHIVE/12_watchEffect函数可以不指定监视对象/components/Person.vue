<template>
    <div class="container">
        <h1> 当temp >= 60 && height >= 80 给服务器发送请求</h1>
        <h1> 水温 : {{  temp }}</h1>
        <h1> 水位 : {{  height }}</h1>
        <button @click="changeTemp">温度+1</button>
        <button @click="changeHeight">水位+1</button>
    </div>


</template>


<script lang="ts" setup name="PersonSetup">
import { reactive, ref, toRefs, toRef, computed, watch , watchEffect} from 'vue';
/**
 * watchEffect:
 */
let temp = ref(0);
let height = ref(0);
function changeTemp() {
    temp.value += 10;
}
function changeHeight() {
    height.value += 10;
}

// 监视多个数据变化, 需要明确指出监视哪些数据，使用数组包裹
watch(
    [temp, height],
    (newVal,oldVal) => {
        console.log("监视到数据变化了", newVal, oldVal);
        if (newVal[0] >= 60 && newVal[1] >= 80) {
            console.log("水温和水位都达标，发送请求给服务器");
        }
    },
    {
        immediate: true
    }
)


// watchEeffect: 自动收集依赖的数据变化, 不需要指定监视哪些数据，只要在回调函数中使用了哪些响应式数据，就会自动监视这些数据的变化
watchEffect(() => {
    //console.log("watchEffect 监视到数据变化了", temp.value, height.value);
    if (temp.value >= 60 ){ // && height.value >= 80) {
        console.log("watchEffect: 水温和水位都达标，发送请求给服务器");
    }
    console.log("watchEffect 执行结束");
})



</script>

<style scoped>
.container {
    background-color: skyblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}
</style>
<template>
    <div class="container">
        <h1 v-if="sum > 4 ? onBeforeUnmount : sum++"> {{ sum }}</h1>
        <button @click="addSum">点我+1</button>
    </div>


</template>


<script lang="ts" setup name="PersonSetup">
import { reactive, ref, toRefs, toRef, computed, watch , watchEffect} from 'vue';


let sum = ref(0);
function addSum() {
    sum.value++;

}

// 组件的生命周期：不同阶段调用不同的钩子函数
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
// 1. 创建阶段：创建前 -> 创建完毕(beforeCreate() -> created()) // 仅执行一次。Vue 3 中使用setup来代替创建过程钩子
// 2. 挂载阶段：挂载前 -> 挂载完毕(beforeMount() -> mounted()) // 仅执行一次。Vue 3 中使用onMounted来代替挂载过程钩子
// 3. 更新阶段：更新前 -> 更新完毕(beforeUpdate() -> updated()) // 每次数据更新都会执行 
// 4. 销毁阶段：销毁前 -> 销毁完毕(beforeUnmount() -> unmounted()) // 仅执行一次

onBeforeMount(() => {
    console.log("Person.vue 组件：挂载前 onBeforeMount()");
});
onMounted(() => {
    console.log("Person.vue 组件：挂载完毕 onMounted()");
});
onBeforeUpdate(() => {
    console.log("Person.vue 组件：更新前 onBeforeUpdate()");
});
onUpdated(() => {
    console.log("Person.vue 组件：更新完毕 onUpdated()");
});
onBeforeUnmount(() => {
    console.log("Person.vue 组件：销毁/卸载前 onBeforeUnmount()");
});
onUnmounted(() => {
    console.log("Person.vue 组件：销毁/卸载完毕 onUnmounted()");
});




</script>

<style scoped>
    /* scoped表示这里的样式只能在本vue组件中生效，即局部生效 */
.container {
    background-color: skyblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}
</style>
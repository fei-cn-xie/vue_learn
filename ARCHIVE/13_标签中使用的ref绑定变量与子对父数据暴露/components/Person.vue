<template>
    <div class="container">
        <h1> 中国</h1>
        <h2 ref="title2"> 北京</h2>
        <h2> 上海</h2>
        <button @click="showLog">点我查看标题</button>
    </div>


</template>


<script lang="ts" setup name="PersonSetup">
import { reactive, ref, toRefs, toRef, computed, watch , watchEffect} from 'vue';

//创建一个title2的ref引用
let title2 ;

function showLog(){
    console.log(title2)
}

/**
 * ref引用:
 * - 用于获取模板中的DOM元素或组件实例。
 * - 应用在html标签上的ref属性，绑定一个变量名。
 * - 应用在组件标签上的ref属性，绑定一个组件实例Proxy对象。
 *     - 父组件无法直接访问子组件的data、methods等选项。需要子组件通过defineExpose暴露特定的属性或方法，父组件才能访问。
 */

 defineExpose({
    title2 // 将title2暴露给父组件
 })



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
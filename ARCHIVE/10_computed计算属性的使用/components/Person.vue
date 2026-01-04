<template>
    <div class="container">
        <!-- 1. 单向绑定v-bind：data修改会影响页面，但页面修改无法影响data -->
        姓：<input type="text" :value="firstName"/>

        <!-- 2. 双向绑定v-model：data和页面修改对彼此可见 -->
        名: <input type="text" v-model="lastName"/>
    <br>
    <button @click="mergeName">合并姓名</button>

    姓名: <span > {{ fullNameComputed }}</span>

        
    </div>
</template>


<script lang="ts" setup name="PersonSetup">
    import {  reactive, ref, toRefs, toRef, computed } from 'vue';
    
    let firstName = ref("张");
    let lastName = ref("三");
    let fullName = ref("");



    // 计算属性：根据其他响应式数据计算得出，具有缓存功能
    // 可以实时反映 firstName 和 lastName 的变化
    // 1. 定义只读计算属性
    let fullNameComputed = computed( 
        () => {
        return firstName.value + lastName.value; // 如果 firstName 或 lastName 没有变化，则不会重新计算。
    })

    // 2. 定义可读写计算属性
    let fullNameComputedRW = computed({
        // getter
        get: () => {
            return firstName.value + lastName.value;
        },
        // setter
        set: (newValue: string) => {
            const names = newValue.split(" ");
            if (names.length === 2) {
                firstName.value = names[0];
                lastName.value = names[1];
            }
        }
    });
    

    // 普通方法：每次调用都会执行, 没有缓存功能
    function mergeName() { 
        fullName.value = firstName.value + lastName.value;
        console.log("fullName:", fullName);
        console.log("fullNameComputed:", fullNameComputed);
        fullNameComputedRW.value = "李 四";
        console.log("After setting fullNameComputedRW to '李 四':", fullNameComputedRW.value);
        
    }

</script>

<style scoped>
.container {
    background-color: skyblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}
</style>
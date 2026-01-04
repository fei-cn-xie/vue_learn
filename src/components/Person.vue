<template>
    <div class="container">
        <h2>个人信息</h2>
        <!-- name自动会有name.value -->
        <p>姓名: {{ person.name }}</p>  
        <p>年龄: {{ person.age }}</p>
        <button @click="changeName">改名</button>
        <button @click="changeAge">变老</button>
        
    </div>
</template>


<script lang="ts" setup name="PersonSetup">
    import {  reactive, ref, toRefs, toRef } from 'vue';
   



    let person = reactive({
        name: "JERRY",
        age: 22
    });


    /**
     * 1. toRefs: 将 reactive 对象的属性转换为响应式引用，从而可以单独监听和修改这些属性。
     * 2. toRef: 将 reactive 对象的单个属性转换为响应式引用。
     */

     let {name, age} = toRefs(person); // 解构赋值后，name和age都是ref类型的响应式数据; 浅拷贝
     let nameRef = toRef(person, "name"); // nameRef是ref类型的响应式数据，指向person.name

    function changeName() {
        person.name += " AppendName";
        name.value += " toRefs";
    }
    function changeAge() {
        person.age += 1;
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
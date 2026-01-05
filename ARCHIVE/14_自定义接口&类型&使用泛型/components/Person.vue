<template>
    <div class="container">
        
    </div>


</template>


<script lang="ts" setup name="PersonSetup">
import { reactive, ref, toRefs, toRef, computed, watch , watchEffect} from 'vue';
import {type Person, type Persons, type PersonArray} from "@/types";
    let person:Person = {
        id:"11",
        name:"张三",
        age:20
    }

    let personList:Person[] = [
        {
            id:"11",
            name:"张三",
            age:20
        },
        {
            id:"22",
            name:"李四",
            age:25
        },
        {
            id:"33",
            name:"王五",
            age:30
        }
    ];
    let persons:Persons = [
        {
            id:"11",
            name:"张三",
            age:20
        },
        {
            id:"22",
            name:"李四",
            age:25
        },
        {
            id:"33",
            name:"王五",
            age:30
        }
    ];
    let personArray:PersonArray = [
        {
            id:"11",
            name:"张三",
            age:20
        },
        {
            id:"22",
            name:"李四",
            age:25
        },
        {
            id:"33",
            name:"王五",
            age:30
        }
    ];


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
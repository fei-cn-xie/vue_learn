<template>
    <div class="container">
        {{a}}
        <br/>
        <ul>
            <!-- :key表示读取person.id作为key -->
            <li v-for="(person, index) in list" :key="person.id">
                x ： 姓名: {{person.name}}, 年龄: {{person.age}}
            </li>
            <li v-for="p in array" :key="p.id">
                y : 姓名: {{p.name}}, 年龄: {{p.age}}
            </li>
        </ul>
    </div>


</template>


<script lang="ts" setup name="PersonSetup">
import { reactive, ref, toRefs, toRef, computed, watch , watchEffect} from 'vue';
// import { withDefaults,defineProps} from 'vue'; // 定义属性,可以不用import
import {type Person, type Persons, type PersonArray} from "@/types";

// 接收父组件传递的属性


// 方式一： 接收
// let x = defineProps(
//     ['a', 'list'] // 必须在数组中指定属性名称，属性名称必须是字符串
// )
// console.log("接收到的属性 a =", x.a, ", list =", x.list);


// 方式二： 接收 + 限制类型
// let y = defineProps<{array: PersonArray, a: string, list:Persons}>();


// 方式三： 接收 + 限制类型 + 限制必要性 + 指定默认值(withDefaults)

let z = withDefaults(defineProps<{list?: Persons, a:string, array:PersonArray}>(),{ // ? 表示可选属性
    list: () => [ // 默认值必须是函数，函数返回值作为默认值
        {
            id: "001",
            name: "默认张三",
            age: 18
        }
    ]
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
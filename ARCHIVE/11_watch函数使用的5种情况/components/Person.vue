<template>
    <div class="container">
        <h1>情况一：监视ref定义的基本数据类型</h1>
        <h2> 当前求和为 {{ sum }}</h2>
        <button @click="changeSum">点我+1</button>
        <hr />
        <h1>情况二：监视ref定义的对象类型数据</h1>
        <h2> 姓名: {{ person.name }} </h2>
        <h2> 年龄: {{ person.age }} </h2>
        <button @click="cahngePerson">点我浅修改</button>
        <button @click="deepChangePerson">点我深修改</button>
    </div>
    <div class="container">

        <h1>情况三：监视reactive定义的对象类型数据</h1>

        <h2> 姓名: {{ reactivePerson.name }} </h2>
        <h2> 年龄: {{ reactivePerson.age }} </h2>
        <button @click="changeReactivePerson">点我修改</button>

        <h1> 情况四：监听Ref或Reactive对象的某个属性</h1>
        <h2> 姓名：{{ personS4.name }}</h2>
        <h2> 年龄：{{ personS4.age }}</h2>
        <h2> 汽车：{{ personS4.car.c1 }}, {{ personS4.car.c2 }}</h2>
        <button @click="changeS4Name">改名字</button>
        <button @click="changeS4Age">变老</button>
        <button @click="changeS4C1">改汽车</button>
        <button @click="changeS4C2">改汽车2</button>
        <button @click="changeS4Car">整体改汽车</button>
    </div>


</template>


<script lang="ts" setup name="PersonSetup">
import { reactive, ref, toRefs, toRef, computed, watch } from 'vue';
/**
 * watch:
 * - 监听响应式数据的变化，并在数据变化时执行回调函数。
 * - 适用于需要在数据变化时执行异步操作或副作用的场景。
 * - 特点：Vue3中的watch只能监视以下的四种数据：
 *  1. ref类型的数据
 *  2. reactive类型的数据
 *  3. 函数返回一个值（getter函数） function f1() {return person.value.name}
 *  4. 数组，数组中包含以上三种类型的数据
 */

// == 情况一：监听 ref定义的基本数据类型 ==

// 数据
let sum = ref(0);

// 方法
function changeSum() {
    sum.value += 1;
}


// 监视
let stopWatch = watch(
    sum, // 被监听的数据
    (newValue, oldValue) => { // 数据变化后执行的回调函数(新值，旧值)
        console.log(`sum changed from ${oldValue} to ${newValue}`);
        if (newValue >= 5) {
            console.log("sum 达到 5，停止监听");
            stopWatch(); // 停止监听
        }
    }
);


// == 情况二：监听 ref 定义的对象类型数据 ==

// 数据
let person = ref({
    name: "JERRY",
    age: 22
});

// 方法
function cahngePerson() {
    person.value.name += "!";
    person.value.age += 1;
}

function deepChangePerson() {
    // 深度修改
    person.value = {
        ...person.value,
        name: person.value.name + "!!",
        age: person.value.age + 2
    };
}

// 监视
/**
 * 参数一：被监听的数据
 * 参数二：数据变化后执行的回调函数(新值，旧值)
 * 参数三：配置选项
 */
let stopWatchPerson = watch(
    person, // 被监听的数据
    (newValue, oldValue) => { // 数据变化后执行的回调函数(新值，旧值), 但是这里的newValue和oldValue是对象的引用地址
        console.log(`person changed from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`);
    },
    {
        deep: true, // 深度监听对象内部的属性变化 (默认是浅监听，只监听引用地址的变化, deep: true表示要深度监听
        immediate: true // 立即执行一次回调函数, 即在监听开始时执行一次回调函数
    }
);


// == 情况三：监听 reactive 定义的对象类型数据， 且默认开启深度监视 ==

// 数据
let reactivePerson = reactive({
    name: "TOM",
    age: 30
});
// 方法
function changeReactivePerson() {
    reactivePerson.name += "?";
    reactivePerson.age += 3;
}

// 监视
let stopWatchReactivePerson = watch(
    reactivePerson,
    (newValue, oldValue) => {
        console.log(`reactivePerson changed from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`);
    },
    {   
        immediate: true // 立即执行一次回调函数, 默认开启深度监视，且无法关闭
    }
);


// == 情况四：监听Ref或Reactive对象的某个属性 ==
let personS4 = reactive({
    name: "ALICE",
    age: 25,
    car: {
        c1: "BMW宝马",
        c2: "Audi奥迪"
    }
});

// 方法
function changeS4Name() {
    personS4.name += "~";
}
function changeS4Age() {
    personS4.age += 4;
}
function changeS4C1() {
    personS4.car.c1 = "Benz奔驰";
}
function changeS4C2() {
    personS4.car.c2 = "Volkswagen";
}
function changeS4Car() {
    personS4.car = {
        c1: "Tesla特斯拉",
        c2: "Ford福特"
    };
}
// 监视
function f2() {
    return personS4.name;
}
let stopWatchS4Name = watch(
    //() => personS4.name, // 只监视 name 属性, 返回一个getter函数; 建议使用函数式写法
    f2,
    (newValue, oldValue) => {
        console.log(`personS4.name changed from ${oldValue} to ${newValue}`);
    }
);


// 情况五：监视上述的多个数据，放在一个数组中
let stopWatchS4Multiple = watch(
    [
        () => personS4.age,
        () => personS4.car.c1
    ], // 监视多个数据，放在一个数组中
    (newValues, oldValues) => {
        console.log(`personS4.age changed from ${oldValues[0]} to ${newValues[0]}`);
        console.log(`personS4.car.c1 changed from ${oldValues[1]} to ${newValues[1]}`);
    }
);

</script>

<style scoped>
.container {
    background-color: skyblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
}
</style>
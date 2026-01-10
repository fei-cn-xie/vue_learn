<template>
    <div class="app">
        <h2>APP vue</h2>
        <suspense>

            <!-- ATTENTION 异步任务完成后呈现 -->
            <template v-slot:default>
                <!-- <h1>父组件访问子组件内容：{{ data }}</h1> -->
                <child>
                    <template #sname="data">
                        <h1> 父组件访问子组件内容sname= {{data}}</h1>
                    </template>
                </child>
            </template>

            <!-- ATTENTION 异步任务没完成时出现 -->
            <template v-slot:fallback>
                <h1>父组件访问子组件内容中。。。</h1>
                <!-- <child/> -->
            </template>
        </suspense>



    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Child from './Child.vue';
import { Suspense } from 'vue';

</script>


<style scoped>
.app {
    background-color: #ddd;
    border-radius: 10px;
    /* 四个方向边距都是10px */
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>
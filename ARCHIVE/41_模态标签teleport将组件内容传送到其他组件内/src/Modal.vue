<template>

    <button @click="isShow = !isShow"> 弹窗</button>
    <!-- ATTENTION teleport将包裹的内容结构甩出去了， 可以通过选择器甩出， 比如 to='body', to='#id', to='.class' -->
    <Teleport to="body">
        <div class="modal" v-show="isShow">
            <!-- <h3>弹窗标题</h3> -->
            <img src="https://img.keaitupian.cn/uploads/2020/07/07/dzojtdb4anz.jpg" />
        </div>

    </Teleport>

</template>

<script lang="ts" setup name="Modal">
import { ref } from 'vue';

let isShow = ref(false);

</script>

<style scoped>
.modal {
    width: 140px;
    height: 200px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;
    flex: content;
    position: fixed;
    left: 50%;
    top: 10%;
}

img {
    height: 100%;
}
</style>
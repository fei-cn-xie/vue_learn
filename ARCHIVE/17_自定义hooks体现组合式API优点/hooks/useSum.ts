import { onBeforeMount, ref } from 'vue';

export default function () {

    // 数据
    let sum = ref(0);

    // 方法
    function addSum() {
        sum.value++;
    }

    // 勾子
    onBeforeMount(()=>{
        sum.value += 100;
    })


    // 向外部提供内容

    return {sum, addSum};


}
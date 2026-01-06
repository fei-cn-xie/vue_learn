import { onBeforeMount, reactive } from 'vue';
// 首先要下载axios，前端必备
import axios from 'axios';

// 获取随机狗
// https://dog.ceo/api/breed/pembroke/images/random
//https://dog.ceo/api/breed/pembroke/images/random


/**
 * 1. 默认暴露：不用定义函数名
 * 2. 手动暴露：一定需要函数名
 */
export default function () {

    //数据
    let dogList = reactive([] as any);

    //方法
    async function addDog() {
        let result = await axios.get("https://dog.ceo/api/breeds/image/random");
        dogList.push(result.data.message)
    }
    function clearDog() {
        console.log(dogList);
        dogList.length = 0;
    }

    // 勾子
    onBeforeMount(()=>{
        addDog();
    })

    // 向外部提供东西
    return {dogList, addDog, clearDog}
}



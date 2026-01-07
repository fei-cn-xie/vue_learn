import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import { reactive } from "vue";

// ATTENTION 选项式写法
// export const usetalkStore = defineStore(
//     'talk', {
            // 方法 actions
//         actions: {
//             
//         },
            //数据
//         state(){
//             return {
//                 // 尝试从本地加载，如果没有就设置为空数组
//                 list: JSON.parse(localStorage.getItem('talk') as string) || [],
//             }
//         }
//     }
// )

// ATTENTION 组合式写法
export const usetalkStore = defineStore('talk',()=> {
    // 数据
    const list = reactive(JSON.parse(localStorage.getItem('talk') as string) || []);

    //
    async function getTalk(){
        let {data:title} = await axios.get('api/words/api.php');
        list.push({
            id: nanoid(),
            title,
        });
    }

     return {list, getTalk}

})
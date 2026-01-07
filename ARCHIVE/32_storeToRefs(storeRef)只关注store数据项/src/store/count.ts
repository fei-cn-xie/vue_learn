// ATTENTION 使用Pinia需要创建store，store中的ts组件和components中的vue组件相互对应
import { defineStore } from "pinia";

export const useCountStore = defineStore(
    'count',   // 第一个参数：id（一般使用本文件名）
    {
        actions: {
            increment(num:number){
                console.log("increment被调用了", num)
                this.sum += num;
            }
        },
        state(){ // 第二个参数：配置对象, 真正存储数据的地方（状态数据）
            return {
                sum: 6,
                school: "",
            }
        }
});


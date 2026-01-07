//  使用Pinia需要创建store，store中的ts组件和components中的vue组件相互对应
import { defineStore } from "pinia";

export const useCountStore = defineStore(
    'count',   // 第一个参数：id（一般使用本文件名）
    {
        actions: {
            increment(num:number){
                console.log("increment被调用了", num)
                this.sum += num;
                this.school = this.sum % 2 == 0 ? "清华qinghua" : "北大beida"
            }
        },
        state(){ // 第二个参数：配置对象, 真正存储数据的地方（状态数据）
            return {
                sum: 6,
                school: "fffdsf",
            }
        },
        getters: { 
            //  getters 第一种写法：对数据进行加工
            bigSum(state){
                return state.sum * 10
            },
            upperSchoole():string{
                console.log("@@@@@@@@!!!!!!!!!upperCase", this);
                return this.school.toUpperCase();
            },
            upperSch:state => {
                return state.school.toUpperCase();
            }
        }
});


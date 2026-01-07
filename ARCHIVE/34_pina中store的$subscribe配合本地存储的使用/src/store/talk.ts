import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const usetalkStore = defineStore(
    'talk', {
        actions: {
            async getTalk(){
                let {data:title} = await axios.get('api/words/api.php');
                this.list.push({
                    id: nanoid(),
                    title,
                });
        }
        },
        state(){
            return {
                // 尝试从本地加载，如果没有就设置为空数组
                list: JSON.parse(localStorage.getItem('talk') as string) || [],
            }
        }
    }
)
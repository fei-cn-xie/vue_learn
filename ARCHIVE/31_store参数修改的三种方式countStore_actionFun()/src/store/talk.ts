import { defineStore } from "pinia";
import { reactive } from "vue";

export const usetalkStore = defineStore(
    'talk', {
        state(){
            return {
                list: []
            }
        }
    }
)
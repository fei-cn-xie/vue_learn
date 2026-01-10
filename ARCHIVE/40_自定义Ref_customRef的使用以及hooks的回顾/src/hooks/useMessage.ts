
import { customRef } from 'vue';
export default function (initValue: any, delay: number) {
	let timer: number; // 
	let message = customRef(

		/**
		 * 
		 * @param track 跟踪: 告诉vue数据msg很重要, vue需要对msg持续关注,一旦msg变化,就去更新 || 监听
		 * @param trigger 触发: 通知vue, msg数据发生了变化 || 通知
		 */
		(track, trigger) => {

			return {
				get() {
					// message被读取时调用
					console.log("Read Value")
					track(); // ATTENTION 读取数据被触发的点
					return initValue.toUpperCase();
				},
				set(value) {
					// message被修改时调用
					clearTimeout(timer); // ATTENTION 根据定时器编号清除, 防止输入一个数据, 1秒后更新,但是在这一秒内有其他数据更改, 发生覆盖
					timer = setTimeout(() => {
						console.log("Change Value")
						initValue = value;
						trigger(); // ATTENTION　写入数据后需要进行触发
					}, delay);

				}
			}
		});
	return message;
}







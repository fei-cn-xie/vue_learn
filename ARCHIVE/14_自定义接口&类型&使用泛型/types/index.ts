// 使用index.ts来集中管理和导出类型定义，可以直接引用这个文件来获取所有类型


// 1. 定义一个接口, 用于限制Person对象的结构
export interface Person {
    id: string, // 在
    name: string,
    age: number
};


// 导出接口
// export { Person };

// 2. 自定义类型
export type Persons = Person[];
export type PersonArray = Array<Person>;
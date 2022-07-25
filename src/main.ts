import add from "./utils/add";

const total = add(2, 222);
console.log(total, "total")

export default (a: number, b: number) => a + b;
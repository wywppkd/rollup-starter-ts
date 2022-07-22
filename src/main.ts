import sleep from "./utils/sleep";

console.log("🚀 ~ file: main.ts ~ line 4 ~ sleep()", sleep())

const obj = {
  fn() {},
};

console.log("🚀 ~ file: main.js ~ line 6 ~ obj?.fn()", obj?.fn());

export default (a: number, b: number) => a + b;

// import sleep from "./utils/sleep";
// console.log("🚀 ~ file: main.ts ~ line 4 ~ sleep()", sleep())
const obj = {
  fn() {}

};
console.log("🚀 ~ file: main.js ~ line 6 ~ obj?.fn()", obj === null || obj === void 0 ? void 0 : obj.fn());
var main = ((a, b) => a + b);

export { main as default };

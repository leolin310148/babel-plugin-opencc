const babel = require("@babel/core");
const openccPlugin = require("../index");

var example = `
console.log("正则表达式");
const hello = "hello";
const myFunc = function (param = "判断输入") {
  return "汉字";
};
`;

it("should replace", () => {
  const { code } = babel.transform(example, {
    plugins: [[
      openccPlugin, { translation: "simplifiedToTraditional" }
    ]]
  });
  expect(code).toMatchSnapshot();
});

it("should change nothing", () => {
  const { code } = babel.transform(example, {
    plugins: [[
      openccPlugin, { translation: "traditionalToSimplified" }
    ]]
  });
  expect(code.match(/[\u4e00-\u9fa5]/g)).toEqual(example.match(/[\u4e00-\u9fa5]/g));
});


//react 虚拟 dom 元素，普通 js 对象，描述界面内容

<h1 id="1">111</h1>
let e = React.createElement("h1", {
  id: "1"
}, "111");

{

$$
key: null
props:
children: "111"
id: "1"
[[Prototype]]: Object
ref: null
type: "h1"
_owner: null
}


<h1 id="1">111<p id="2">22</p></h1>
多个儿子就会变成数组
React.createElement("h1", {
id: "1"
}, "111", /*#__PURE__*/React.createElement("p", {
id: "2"
}, "22"));



render把虚拟dom变成真实dom，渲染到页面


独生子好处：方便取，不需要childern[0]


react源码 文本节点无类型标识
因为一个元素只有一个儿子，儿子还是文本，react进行了优化


编译得到React.createElement方法，后在浏览器执行该方法得到虚拟DOM

jsx不能内不能有关键字
for htmlFor  //获取焦点，label和input搭配
class className
style 对象


key
没有key会按照索引一一对比，有key根据key对比
头插时会比较差异，而不是直接删
key用于map的键，相同会覆盖


React元素不可变 ，会不停创建新的元素去渲染，且只会更新必要部分
react17一起只是规定，现在修改会报错


react17之后不再转成React.createElement，
调用jsxs-transform，用jsx()函数替换React.createElement
编译器自动引入 import {jsx as _jsx} from 'react/jsx-runtime
即修改了jsx转换逻辑
好处：避免耦合，不用引入React
配置到scripts命令内：DISABLE_NEW_JSX_TRANSFORM=true


```json
{
  "type":"h1",
  "props":{
    "className":"title",
    "style":{"color":"blue"},
    "children":{
      "type":"span",
      "props":{
        "children":"hello"
      },
    }
  },
}
```

replacer替换器

JSON.stringify(obj,null,1)//空一个

null处可以传入一个替换器

eg
a.js

![image-20220107115837736](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220107115837736.png)
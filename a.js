let obj = { name: 'fur', age: 1 }
console.log(JSON.stringify(obj, null, 2)) //空两格

// {
//   "name": "fur",
//   "age": 1
// }

console.log(JSON.stringify(obj, replacer, 3)) //空三格
// {
//    "name": "fur",
//    "age": 2
// }
//替换器
function replacer(key, value) {
  if (key === 'age') {
    return value + 1
  } else {
    return value
  }
}

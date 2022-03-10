/**
 * 
 * @param {*} type 元素类型
 * @param {*} config 配置对象
 * @param {*} children 孩子或孩子们
 */
function createElement(type, config, children) {//...children
  let props = { ...config }
  if (arguments.length > 3) {
    children = Array.prototype.slice.call(arguments,2)//获得全部儿子
  }
  props.children = children
  return {type,props }
}
const React = { createElement }
export default React 